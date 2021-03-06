/* eslint-disable max-len */
const authenticateInputWithRpidAndAllowCredentials = `/*
* Copyright 2018-2020 ForgeRock AS. All Rights Reserved
*
* Use of this code requires a commercial software license with ForgeRock AS.
* or with one of its affiliates. All use shall be exclusively subject
* to such license between the licensee and ForgeRock AS.
*/

if (!window.PublicKeyCredential) {
   document.getElementById('webAuthnOutcome').value = "unsupported";
   document.getElementById("loginButton_0").click();
}

var options = {
   rpId: "example.com",
   challenge: new Int8Array([14, 126, -110, -74, 64, -66, 20, -56, -40, -28, 116, -61, -128, -20, 72, 24, 42, 79, -105, 94, -84, -12, -17, -97, 105, -31, -30, 92, 55, 67, -83, 65]).buffer,
   timeout: 60000,
   allowCredentials: [{ type: "public-key", id: new Int8Array([-107, 93, 68, -67, -5, 107, 18, 16, -25, -30, 80, 103, -75, -53, -2, -95, 102, 42, 47, 126, -1, 85, 93, 45, -85, 8, -108, 107, 47, -25, 66, 12, -96, 81, 104, -127, 26, -59, -69, -23, 75, 89, 58, 124, -93, 4, 28, -128, 121, 35, 39, 103, -86, -86, 123, -67, -7, -4, 79, -49, 127, -19, 7, 4]).buffer }]
};

navigator.credentials.get({ "publicKey" : options })
   .then(function (assertion) {
       var clientData = String.fromCharCode.apply(null, new Uint8Array(assertion.response.clientDataJSON));
       var authenticatorData = new Int8Array(assertion.response.authenticatorData).toString();
       var signature = new Int8Array(assertion.response.signature).toString();
       var rawId = assertion.id;
       var userHandle = String.fromCharCode.apply(null, new Uint8Array(assertion.response.userHandle));
       document.getElementById('webAuthnOutcome').value = clientData + "::" + authenticatorData + "::" + signature + "::" + rawId + "::" + userHandle;
       document.getElementById("loginButton_0").click();
   }).catch(function (err) {
       document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
       document.getElementById("loginButton_0").click();
   });`;

const authenticateInputWithRpidAllowCredentialsAndQuotes = `/*
* Copyright 2018-2020 ForgeRock AS. All Rights Reserved
*
* Use of this code requires a commercial software license with ForgeRock AS.
* or with one of its affiliates. All use shall be exclusively subject
* to such license between the licensee and ForgeRock AS.
*/

if (!window.PublicKeyCredential) {
   document.getElementById('webAuthnOutcome').value = "unsupported";
   document.getElementById("loginButton_0").click();
}

var options = {
   "rpId": "example.com",
   "challenge": new Int8Array([14, 126, -110, -74, 64, -66, 20, -56, -40, -28, 116, -61, -128, -20, 72, 24, 42, 79, -105, 94, -84, -12, -17, -97, 105, -31, -30, 92, 55, 67, -83, 65]).buffer,
   "timeout": 60000,
   "allowCredentials": [{ "type": "public-key", "id": new Int8Array([-107, 93, 68, -67, -5, 107, 18, 16, -25, -30, 80, 103, -75, -53, -2, -95, 102, 42, 47, 126, -1, 85, 93, 45, -85, 8, -108, 107, 47, -25, 66, 12, -96, 81, 104, -127, 26, -59, -69, -23, 75, 89, 58, 124, -93, 4, 28, -128, 121, 35, 39, 103, -86, -86, 123, -67, -7, -4, 79, -49, 127, -19, 7, 4]).buffer }]
};

navigator.credentials.get({ "publicKey" : options })
   .then(function (assertion) {
       var clientData = String.fromCharCode.apply(null, new Uint8Array(assertion.response.clientDataJSON));
       var authenticatorData = new Int8Array(assertion.response.authenticatorData).toString();
       var signature = new Int8Array(assertion.response.signature).toString();
       var rawId = assertion.id;
       var userHandle = String.fromCharCode.apply(null, new Uint8Array(assertion.response.userHandle));
       document.getElementById('webAuthnOutcome').value = clientData + "::" + authenticatorData + "::" + signature + "::" + rawId + "::" + userHandle;
       document.getElementById("loginButton_0").click();
   }).catch(function (err) {
       document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
       document.getElementById("loginButton_0").click();
   });`;

const authenticateInputWithoutRpidAndAllowCredentials = `/*
* Copyright 2018-2020 ForgeRock AS. All Rights Reserved
*
* Use of this code requires a commercial software license with ForgeRock AS.
* or with one of its affiliates. All use shall be exclusively subject
* to such license between the licensee and ForgeRock AS.
*/

if (!window.PublicKeyCredential) {
   document.getElementById('webAuthnOutcome').value = "unsupported";
   document.getElementById("loginButton_0").click();
}

var options = {
   challenge: new Int8Array([14, 126, -110, -74, 64, -66, 20, -56, -40, -28, 116, -61, -128, -20, 72, 24, 42, 79, -105, 94, -84, -12, -17, -97, 105, -31, -30, 92, 55, 67, -83, 65]).buffer,
   timeout: 60000,
};

navigator.credentials.get({ "publicKey" : options })
   .then(function (assertion) {
       var clientData = String.fromCharCode.apply(null, new Uint8Array(assertion.response.clientDataJSON));
       var authenticatorData = new Int8Array(assertion.response.authenticatorData).toString();
       var signature = new Int8Array(assertion.response.signature).toString();
       var rawId = assertion.id;
       var userHandle = String.fromCharCode.apply(null, new Uint8Array(assertion.response.userHandle));
       document.getElementById('webAuthnOutcome').value = clientData + "::" + authenticatorData + "::" + signature + "::" + rawId + "::" + userHandle;
       document.getElementById("loginButton_0").click();
   }).catch(function (err) {
       document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
       document.getElementById("loginButton_0").click();
   });`;

const registerInputWithRpid = `/*
 * Copyright 2018-2020 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

if (!window.PublicKeyCredential) {
    document.getElementById('webAuthnOutcome').value = "unsupported";
    document.getElementById("loginButton_0").click();
}

var publicKey = {
    challenge: new Int8Array([102, -15, -36, -101, -95, 10, -20, 39, 29, 70, 122, 25, 53, 83, 72, -38, 83, -92, 31, -30, 26, -94, 92, -94, -83, 7, 82, -66, -125, -95, -4, -75]).buffer,
    // Relying Party:
    rp: {
        id: "example.com",
        name: "ForgeRock"
    },
    // User:
    user: {
        id: Uint8Array.from("NTdhNWI0ZTQtNjk5OS00YjQ1LWJmODYtYTRmMmU1ZDRiNjI5", function (c) { return c.charCodeAt(0) }),
        name: "57a5b4e4-6999-4b45-bf86-a4f2e5d4b629",
        displayName: "bob_lee-tester@me.co.uk"
    },
    pubKeyCredParams: [ { type: "public-key", alg: -257 }, { type: "public-key", alg: -7 } ],
    attestation: "none",
    timeout: 60000,
    excludeCredentials: [],
    authenticatorSelection: {
      userVerification: "preferred"
      authenticatorAttachment:"cross-platform"
    }
};

navigator.credentials.create({publicKey: publicKey})
    .then(function (newCredentialInfo) {
        var rawId = newCredentialInfo.id;
        var clientData = String.fromCharCode.apply(null, new Uint8Array(newCredentialInfo.response.clientDataJSON));
        var keyData = new Int8Array(newCredentialInfo.response.attestationObject).toString();
        document.getElementById('webAuthnOutcome').value = clientData + "::" + keyData + "::" + rawId;
        document.getElementById("loginButton_0").click();
    }).catch(function (err) {
        document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
        document.getElementById("loginButton_0").click();
    });`;

const registerInputWithRpidAndQuotes = `/*
    * Copyright 2018-2020 ForgeRock AS. All Rights Reserved
    *
    * Use of this code requires a commercial software license with ForgeRock AS.
    * or with one of its affiliates. All use shall be exclusively subject
    * to such license between the licensee and ForgeRock AS.
    */

   if (!window.PublicKeyCredential) {
       document.getElementById('webAuthnOutcome').value = "unsupported";
       document.getElementById("loginButton_0").click();
   }

   var publicKey = {
       "challenge": new Int8Array([102, -15, -36, -101, -95, 10, -20, 39, 29, 70, 122, 25, 53, 83, 72, -38, 83, -92, 31, -30, 26, -94, 92, -94, -83, 7, 82, -66, -125, -95, -4, -75]).buffer,
       // Relying Party:
       "rp": {
           "id": "example.com",
           "name": "ForgeRock"
       },
       // User:
       "user": {
           "id": Uint8Array.from("NTdhNWI0ZTQtNjk5OS00YjQ1LWJmODYtYTRmMmU1ZDRiNjI5", function (c) { return c.charCodeAt(0) }),
           "name": "57a5b4e4-6999-4b45-bf86-a4f2e5d4b629",
           "displayName": "bob_lee-tester@me.co.uk"
       },
       "pubKeyCredParams": [ { "type": "public-key", "alg": -257 }, { "type": "public-key", "alg": -7 } ],
       "attestation": "none",
       "timeout": 60000,
       "excludeCredentials": [],
       "authenticatorSelection": {"userVerification":"preferred","authenticatorAttachment":"cross-platform"}
   };

   navigator.credentials.create({publicKey: publicKey})
       .then(function (newCredentialInfo) {
           var rawId = newCredentialInfo.id;
           var clientData = String.fromCharCode.apply(null, new Uint8Array(newCredentialInfo.response.clientDataJSON));
           var keyData = new Int8Array(newCredentialInfo.response.attestationObject).toString();
           document.getElementById('webAuthnOutcome').value = clientData + "::" + keyData + "::" + rawId;
           document.getElementById("loginButton_0").click();
       }).catch(function (err) {
           document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
           document.getElementById("loginButton_0").click();
       });`;

const registerOutputWithRpid = {
  attestation: 'none',
  authenticatorSelection: {
    userVerification: 'preferred',
    authenticatorAttachment: 'cross-platform',
  },
  challenge: [
    /* don't directly test */
  ],
  pubKeyCredParams: [
    { type: 'public-key', alg: -257 },
    { type: 'public-key', alg: -7 },
  ],
  rp: { id: 'example.com', name: 'ForgeRock' },
  timeout: 60000,
  user: {
    displayName: 'bob_lee-tester@me.co.uk',
    id: [
      /* don't directly test */
    ],
    name: '57a5b4e4-6999-4b45-bf86-a4f2e5d4b629',
  },
};

const registerInputWithoutRpid = `/*
 * Copyright 2018-2020 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

if (!window.PublicKeyCredential) {
    document.getElementById('webAuthnOutcome').value = "unsupported";
    document.getElementById("loginButton_0").click();
}

var publicKey = {
    challenge: new Int8Array([102, -15, -36, -101, -95, 10, -20, 39, 29, 70, 122, 25, 53, 83, 72, -38, 83, -92, 31, -30, 26, -94, 92, -94, -83, 7, 82, -66, -125, -95, -4, -75]).buffer,
    // Relying Party:
    rp: {
        name: "ForgeRock"
    },
    // User:
    user: {
        id: Uint8Array.from("NTdhNWI0ZTQtNjk5OS00YjQ1LWJmODYtYTRmMmU1ZDRiNjI5", function (c) { return c.charCodeAt(0) }),
        name: "57a5b4e4-6999-4b45-bf86-a4f2e5d4b629",
        displayName: "Bob Tester"
    },
    pubKeyCredParams: [ { "type": "public-key", "alg": -257 }, { "type": "public-key", "alg": -7 } ],
    attestation: "none",
    timeout: 60000,
    excludeCredentials: [],
    authenticatorSelection: {"userVerification":"preferred"}
};

navigator.credentials.create({publicKey: publicKey})
    .then(function (newCredentialInfo) {
        var rawId = newCredentialInfo.id;
        var clientData = String.fromCharCode.apply(null, new Uint8Array(newCredentialInfo.response.clientDataJSON));
        var keyData = new Int8Array(newCredentialInfo.response.attestationObject).toString();
        document.getElementById('webAuthnOutcome').value = clientData + "::" + keyData + "::" + rawId;
        document.getElementById("loginButton_0").click();
    }).catch(function (err) {
        document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
        document.getElementById("loginButton_0").click();
    });`;

const registerOutputWithoutRpid = {
  attestation: 'none',
  authenticatorSelection: { userVerification: 'preferred' },
  challenge: [
    /* don't directly test */
  ],
  pubKeyCredParams: [
    { type: 'public-key', alg: -257 },
    { type: 'public-key', alg: -7 },
  ],
  rp: { name: 'ForgeRock' },
  timeout: 60000,
  user: {
    displayName: 'Bob Tester',
    id: [
      /* don't directly test */
    ],
    name: '57a5b4e4-6999-4b45-bf86-a4f2e5d4b629',
  },
};

const registerInputWithExcludeCreds = `/*
 * Copyright 2018-2020 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

if (!window.PublicKeyCredential) {
    document.getElementById('webAuthnOutcome').value = "unsupported";
    document.getElementById("loginButton_0").click();
}

var publicKey = {
    challenge: new Int8Array([102, -15, -36, -101, -95, 10, -20, 39, 29, 70, 122, 25, 53, 83, 72, -38, 83, -92, 31, -30, 26, -94, 92, -94, -83, 7, 82, -66, -125, -95, -4, -75]).buffer,
    // Relying Party:
    rp: {
        name: "ForgeRock"
    },
    // User:
    user: {
        id: Uint8Array.from("NTdhNWI0ZTQtNjk5OS00YjQ1LWJmODYtYTRmMmU1ZDRiNjI5", function (c) { return c.charCodeAt(0) }),
        name: "57a5b4e4-6999-4b45-bf86-a4f2e5d4b629",
        displayName: "Bob Tester"
    },
    pubKeyCredParams: [ { "type": "public-key", "alg": -257 }, { "type": "public-key", "alg": -7 } ],
    attestation: "none",
    timeout: 60000,
    excludeCredentials: [{ "type": "public-key", "id": new Int8Array([49, -96, -107, 113, 106, 5, 115, 22, 68, 121, -85, -27, 8, -58, -113, 127, -105, -37, -10, -12, -58, -25, 29, -82, -18, 69, -99, 125, 33, 82, 38, -66, -27, -128, -91, -86, 87, 68, 94, 0, -78, 70, -11, -70, -14, -53, 38, -60, 46, 27, 66, 46, 21, -125, -70, 123, -46, -124, 86, -2, 102, 70, -52, 54]).buffer },{ "type": "public-key", "id": new Int8Array([64, 17, -15, -123, -21, 127, 76, -120, 90, -112, -5, 54, 105, 93, 82, -104, -79, 107, -69, -3, -113, -94, -59, -4, 126, -33, 117, 32, -44, 122, -97, 8, -112, 105, -96, 96, 90, 44, -128, -121, 107, 79, -98, -68, -93, 11, -105, -47, 102, 13, 110, 84, 59, -91, -30, 37, -3, -22, 39, 111, -10, 87, -50, -35]).buffer }],
    authenticatorSelection: {"userVerification":"preferred"}
};

navigator.credentials.create({publicKey: publicKey})
    .then(function (newCredentialInfo) {
        var rawId = newCredentialInfo.id;
        var clientData = String.fromCharCode.apply(null, new Uint8Array(newCredentialInfo.response.clientDataJSON));
        var keyData = new Int8Array(newCredentialInfo.response.attestationObject).toString();
        document.getElementById('webAuthnOutcome').value = clientData + "::" + keyData + "::" + rawId;
        document.getElementById("loginButton_0").click();
    }).catch(function (err) {
        document.getElementById('webAuthnOutcome').value = "ERROR" + "::" + err;
        document.getElementById("loginButton_0").click();
    });`;

const registerOutputWithExcludeCreds = {
  attestation: 'none',
  authenticatorSelection: { userVerification: 'preferred' },
  challenge: [
    /* don't directly test */
  ],
  excludeCredentials: [
    {
      type: 'public-key',
      id: 'Do not directly test',
    },
    {
      type: 'public-key',
      id: 'Do not directly test',
    },
  ],
  pubKeyCredParams: [
    { type: 'public-key', alg: -257 },
    { type: 'public-key', alg: -7 },
  ],
  rp: { name: 'ForgeRock' },
  timeout: 60000,
  user: {
    displayName: 'Bob Tester',
    id: [
      /* don't directly test */
    ],
    name: '57a5b4e4-6999-4b45-bf86-a4f2e5d4b629',
  },
};

export {
  authenticateInputWithRpidAndAllowCredentials,
  authenticateInputWithRpidAllowCredentialsAndQuotes,
  authenticateInputWithoutRpidAndAllowCredentials,
  registerInputWithRpid,
  registerInputWithRpidAndQuotes,
  registerOutputWithRpid,
  registerInputWithoutRpid,
  registerOutputWithoutRpid,
  registerInputWithExcludeCreds,
  registerOutputWithExcludeCreds,
};
