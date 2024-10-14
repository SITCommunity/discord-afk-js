/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file errorBase.js
 */

'use strict';

const errorCode = require("./errorCode");
const Messages = require("./errorMsg");

function errorBase(Base) {
    return class DiscordAfkError extends Base {
        constructor(code, ...args) {
            super(message(code, args));
            this.code = code;
            Error.captureStackTrace?.(this, DiscordAfkError);
        }

        get name() {
            return `${super.name} [${this.code}]`;
        }
    };
}

function message(code, args) {
    if (!(code in errorCode)) throw new Error('Error code must be a valid Error Code');
    const msg = Messages[code];
    if (!msg) throw new Error(`No message associated with error code: ${code}.`);
    if (typeof msg === 'function') return msg(...args);
    if (!args?.length) return msg;
    args.unshift(msg);
    return String(...args);
}

module.exports = {
    AfkError: errorBase(Error),
    AfkTypeError: errorBase(TypeError),
};