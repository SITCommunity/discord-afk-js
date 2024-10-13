/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file errorMsg.js
 */

'use strict';

const errorCode = require("./errorCode");

const errorMsg = {
    [errorCode.InvalidMissing]: 'At least one valid id or reason must be provided',
    [errorCode.InvalidType]: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,
    [errorCode.CheckUpdateFailed]: (errorCode) => `Error while checking update: ${errorCode}.`,
    [errorCode.InvalidPackageInfo]: 'Invalid response from package-json.',
}
module.exports = errorMsg;