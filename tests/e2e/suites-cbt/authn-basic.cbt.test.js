
var assert = require('assert');
var webdriver = require("selenium-webdriver");
const { By, until } = webdriver;
const cbt = require('../cbt.env.config');
var tools = require('./tools');

const testName = 'Test Basic Login flow';
const testUrl = 'https://sdkapp.petrov.ca/authn-basic/?amUrl=https://default.forgeops.petrov.ca/am&un=sdkuser&pw=password';

jest.setTimeout(120000); // Set jest timeout to 2 minutes
var sessionId = null;   // needed to report results into CBT


describe(testName, () => {
    cbt.browsers.forEach((browser) => {
        
        console.log(`${browser.browserName} :: ===========> START`);
        let driver;

        // set capabilities
        var caps = {
            name : `${testName} with ${browser.browserName}`,
            browserName : browser.browserName,
            version : browser.version,
            platform : browser.platform,
            record_video : cbt.record_video,
            record_network : cbt.record_network,
            screen_resolution : browser.screenResolution,
            username : cbt.username,
            password : cbt.authkey
        };
 
        // test case
        test(`${testName} with ${browser.browserName}`, async () => {
            try {
                driver = await new webdriver.Builder()
                .usingServer(cbt.cbtHub)
                .withCapabilities(caps)
                .build();
                await driver.manage().setTimeouts({ implicit: 20000, pageLoad: 15000, script: 15000 });
                await driver.getSession().then(function(session){
                    sessionId = session.id_;
                    console.log(':: ===========> Session ID: ', sessionId);
                    console.log(':: ===========> See your test run at: https://app.crossbrowsertesting.com/selenium/' + sessionId)
                });

                console.log(`${browser.browserName} :: ===========> DRIVER->BUILT`);
                await driver.get(testUrl);
                console.log(`${browser.browserName} :: ===========> DRIVER->GET`);
                
                console.log(`${browser.browserName} :: ===========> TEST->START`);
                await driver.wait(until.elementLocated(By.css(".Test_Complete")), 5000);
                assert(await driver.getTitle() == "E2E Test | ForgeRock JavaScript SDK");
                console.log(`${browser.browserName} :: ===========> ASSERTION 1`);
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Configure the SDK\')]")).getText() == "Configure the SDK");
                console.log(`${browser.browserName} :: ===========> ASSERTION 2`);
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Initiate first step with undefined\')]")).getText() == "Initiate first step with undefined");
                console.log(`${browser.browserName} :: ===========> ASSERTION 3`);
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Starting authentication with service\')]")).getText() == "Starting authentication with service");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Set values on auth tree callbacks\')]")).getText() == "Set values on auth tree callbacks");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Continuing authentication with service\')]")).getText() == "Continuing authentication with service");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Basic login successful\')]")).getText() == "Basic login successful");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Logout successful\')]")).getText() == "Logout successful");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Test script complete\')]")).getText() == "Test script complete");
                console.log(`${browser.browserName} :: ===========> DRIVER->QUIT`);
                await driver.quit();
                console.log(`${browser.browserName} :: ===========> DRIVER->AFTER QUIT`);

                //set the score as passing
                await tools.setScore('pass', sessionId, cbt.username, cbt.authkey).then(function(result){
                    console.log('SUCCESS!')
                });
                // done();  // undefined?
            }
            catch(e){
                console.log(`${browser.browserName} :: ===========> EXCEPTION`);
                console.error(e);

                if (driver && sessionId){
                    await driver.quit();
                    await tools.setScore('fail', sessionId, cbt.username, cbt.authkey).then(function(result){
                        console.log('FAILURE!')
                    })
                }
                fail(e);
                // done(); // undefined?
            };
        });
    });
});
