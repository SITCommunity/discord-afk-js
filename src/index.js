/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file index.js
 */

'use strict';

// Client classes
exports.AfkClient = require('./client/AfkClient');

// Errors
exports.AfkError = require('./error/errorBase').AfkError;
exports.AfkTypeError = require('./error/errorBase').AfkTypeError;
exports.errorCode = require('./error/errorCode');

// discord-afl-js versions
exports.versions = `${require("../package.json").version}`;