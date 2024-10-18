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
    [errorCode.InvalidPackageInfo]: 'Invalid response from package-json.',
    [errorCode.InvalidURL]: 'Invalid MongoURL',

    [errorCode.CheckUpdateFailed]: (errorCode) => `Error while checking update: ${errorCode}.`,
    [errorCode.Timeout]: 'MongoDB connection timed out',

    [errorCode.ConnectionError]: (error) => `An error occurred while connecting to MongoDB: ${error.message}`,
    [errorCode.NotConnected]: 'Not connected to MongoDB',
    [errorCode.NoToken]: 'No token provided, please specify a valid token',

    [errorCode.DbError]: (error) => `An error occurred while interacting with MongoDB: ${error}`,
}
module.exports = errorMsg;