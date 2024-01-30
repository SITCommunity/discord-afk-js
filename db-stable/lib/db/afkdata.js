/**
 * @author brokenedtzjs
 * @license Apache-2.0
 * @copyright brokenedtzjs
 * @file afkdata.js
 */

'use strict';

const { Schema, model } = require('mongoose');

module.exports = model('afkdata', new Schema({
    Id: String,
    reasonData: {
        type: String,
        default: 'No Reason',
    },
    timeData : {
        type: Date,
        default: new Date(),
    },
}));