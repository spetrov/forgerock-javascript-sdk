var request = require('request');

//Call API to set the score
module.exports = {
    setScore: async function (score, sessionId, username, authkey){
    return new Promise((resolve, fulfill)=> {
    var result = { error: false, message: null }

    console.log(' ===========> Set score for test run: https://app.crossbrowsertesting.com/selenium/' + sessionId);
    if (sessionId){
        
        request({
            method: 'PUT',
            uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + sessionId,
            body: {'action': 'set_score', 'score': score },
            json: true
        },
        function(error, response, body) {
            if (error) {
                result.error = true;
                result.message = error;
            }
            else if (response.statusCode !== 200){
                result.error = true;
                result.message = body;
            }
            else{
                result.error = false;
                result.message = 'success';
            }
        })
        .auth(username, authkey);
        console.log(' ===========> Set score for test run to PASS');
    }
    else{
        result.error = true;
        result.message = 'Session Id was not defined';
        deferred.fulfill(result);
    }
        result.error ? fulfill('Fail') : resolve('Pass');
    });
}
};