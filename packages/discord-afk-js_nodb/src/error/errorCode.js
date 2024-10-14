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
 * @property {'CheckUpdateFailed'} CheckUpdateFailed
 * @property {'InvalidPackageInfo'} InvalidPackageInfo
 */

const keys = [
    'InvalidType',
    'InvalidMissing',
    'CheckUpdateFailed',
    'InvalidPackageInfo',
];

/**
 * @type {DiscordAfkError}
 * @ignore
 */
module.exports = Object.fromEntries(keys.map(key => [key, key]));