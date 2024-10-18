/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file afkdata.js
 */

'use strict';

const { Schema, model } = require('mongoose');

module.exports = model('afkdata', new Schema({
    userId: {
        type: String,
        required: true,
    },
    reasonData: {
        type: String,
        default: 'No Reason',
    },
    timeData : {
        type: Date,
        default: Date.now,
    },
}));