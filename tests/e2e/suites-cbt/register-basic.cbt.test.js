
var assert = require('assert');
var webdriver = require("selenium-webdriver");
const { ConsoleLogger } = require('typedoc/dist/lib/utils');
var uuid = require('uuid');
const { By, until } = webdriver;
const cbt = require('../cbt.env.config');
var tools = require('./tools');


const testName = 'Test basic registration flow';

jest.setTimeout(120000); // Set jest timeout to 2 minutes
var sessionId = null;   // needed to report results into CBT


describe(testName, () => {
    cbt.browsers.forEach((browser) => {
        
        const un = uuid.v4();
        const email = `${un}@me.com`;
        const testUrl = `https://sdkapp.petrov.ca/register-basic/?amUrl=https://default.forgeops.petrov.ca/am&un=${un}&email=${email}`;
        console.log(` :: ===========> UUID ${un}`);
        console.log(` :: ===========> EMAIL ${email}`);
        console.log(` :: ===========> START ${testUrl}`);

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
                //.forBrowser('chrome')
                .build();
                await driver.manage().setTimeouts({ implicit: 20000, pageLoad: 15000, script: 15000 });
                await driver.getSession().then(function(session){
                    sessionId = session.id_;
                    console.log(':: ===========> Session ID: ', sessionId);
                    console.log(':: ===========> See your test run at: https://app.crossbrowsertesting.com/selenium/' + sessionId)
                });

                console.log(` :: ===========> UUID ${un}`);
                console.log(` :: ===========> EMAIL ${email}`);
                console.log(`${browser.browserName} :: ===========> DRIVER->BUILT`);
                await driver.get(testUrl);
                console.log(`${browser.browserName} :: ===========> DRIVER->GET`);
                
                console.log(`${browser.browserName} :: ===========> TEST->START`);
                // Wait for the test to finish completely...
                await driver.wait(until.elementLocated(By.css(".Test_Complete")), 5000);
                assert(await driver.getTitle() == "E2E Test | ForgeRock JavaScript SDK");
                console.log(`${browser.browserName} :: ===========> ASSERTION 1`);
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt from UsernameCallback is Username\')]")).getText() == "Prompt from UsernameCallback is Username");
                console.log(`${browser.browserName} :: ===========> ASSERTION 2`);
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt from PasswordCallback is Password\')]")).getText() == "Prompt from PasswordCallback is Password");
                console.log(`${browser.browserName} :: ===========> ASSERTION 3`);
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 1: First Name\')]")).getText() == "Prompt 1: First Name");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 2: Last Name\')]")).getText() == "Prompt 2: Last Name");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 3: Email Address\')]")).getText() == "Prompt 3: Email Address");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 4: Send me special offers and services\')]")).getText() == "Prompt 4: Send me special offers and services");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 5: Send me news and updates\')]")).getText() == "Prompt 5: Send me news and updates");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 7: Select a security question\')]")).getText() == "Prompt 7: Select a security question");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 8: Select a security question\')]")).getText() == "Prompt 8: Select a security question");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Predefined Question1\')]")).getText() == "Predefined Question1: What\'s your favorite color?");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Predefined Question2\')]")).getText() == "Predefined Question2: Who was your first employer?");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Handle TermsAndConditionsCallback\')]")).getText() == "Handle TermsAndConditionsCallback");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Terms version: 0.0\')]")).getText() == "Terms version: 0.0");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Terms text: Lorem ipsum dolor sit amet, consectetur adipiscing elit\')]")).getText() == "Terms text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Login successful\')]")).getText() == "Login successful");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Logout successful\')]")).getText() == "Logout successful");
                assert(await driver.findElement(By.xpath("//p[contains(.,\'Prompt 1: First Name\')]")).getText() == "Prompt 1: First Name");

                console.log(`${browser.browserName} :: ===========> DRIVER->QUIT`);
                await driver.quit();
                console.log(`${browser.browserName} :: ===========> DRIVER->AFTER QUIT`);

                //set the score as passing
                await tools.setScore('pass', sessionId, cbt.username, cbt.authkey).then(function(result){
                    console.log('SUCCESS!')
                });

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
