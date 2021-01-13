/*
 * @forgerock/javascript-sdk
 *
 * cbt.env.config.ts
 *
 * Copyright (c) 2020 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

 var cbt = {};

cbt.cbtHub = 'https://hub.crossbrowsertesting.com:443/wd/hub';
// cbt.cbtHub = 'https://hub-cloud.crossbrowsertesting.com:443/wd/hub'; // for headless runs
cbt.name = process.env.CBT_BUILD_NAME || 'JS-Core-CBT-Manual-Run';
cbt.build = process.env.CBT_BUILD_NUMBER;
cbt.record_video = 'true';
cbt.record_network = 'true';
cbt.username = process.env.CBT_USERNAME;
cbt.authkey = process.env.CBT_AUTHKEY;
cbt.browsers = JSON.parse(process.env.CBT_BROWSERS || "[{\"browserName\":\"Chrome\",\"isMobile\":false,\"screenResolution\":\"1024x768\",\"version\":\"70\",\"platform\":\"Mac OSX 10.14\"}]");

module.exports = cbt;