/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file errorBase.js
 */

'use strict';

/**
 * @typedef {Object} errorCode
 * 
 * @property {'InvalidType'} InvalidType
 * @property {'InvalidMissingScopes'} InvalidMissing
 * @property {'InvalidPackageInfo'} InvalidPackageInfo
 * @property {'InvalidURL'} InvalidURL
 * 
 * @property {'CheckUpdateFailed'} CheckUpdateFailed
 * @property {'Timeout'} Timeout
 * 
 * @property {'ConnectionError'} ConnectionError
 * @property {'NotConnected'} NotConnected
 * @property {'NoToken'} NoToken
 * 
 * @property {'DbError'} DbError
 */

const keys = [
    'InvalidType',
    'InvalidMissing',
    'InvalidPackageInfo',
    'InvalidURL',

    'CheckUpdateFailed',
    'Timeout',

    'ConnectionError',
    'NotConnected',
    'NoToken',

    'DbError',
];

/**
 * @type {DiscordAfkError}
 * @ignore
 */
module.exports = Object.fromEntries(keys.map(key => [key, key]));