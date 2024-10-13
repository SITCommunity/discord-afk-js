/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file AfkClient.js
 */

'use strict';

const {
    AfkTypeError,
    errorCode,
} = require('../error');
const {
    checkingUpdate
} = require('../util/UpdateChecker');

class AfkClient {
    constructor() {
        this.user = new Map();
    }

    // Add a user to AFK status.
    setUser(options = {}) {
        if (typeof options !== 'object') throw new AfkTypeError(errorCode.InvalidType, 'options', 'object', true);

        const { id, reason } = options;
        if (id === undefined) {
            throw new AfkTypeError(errorCode.InvalidMissing);
        }

        if (reason === undefined) {
            return this.user.set(id, [Date.now(), 'No Reason']);
        } else {
            return this.user.set(id, [Date.now(), reason]);
        }
    }

    // Remove a user from AFK status.
    removeUser(id) {
        if (id === undefined) {
            throw new AfkTypeError(errorCode.InvalidMissing);
        }
        return this.user.delete(id);
    }

    // Check if a user is in AFK status.
    getUser(id) {
        if (id === undefined) {
            throw new AfkTypeError(errorCode.InvalidMissing);
        }
        return this.user.has(id);
    }

    // Get the AFK reason for a user.
    getReason(id) {
        if (id === undefined) {
            throw new AfkTypeError(errorCode.InvalidMissing);
        }
        //return this.user.get(id);
        return this.user.get(id);
    }

    checkUpdate(options = {}) {
        const { enable } = options;
        checkingUpdate(enable);
    }
}

module.exports = AfkClient;