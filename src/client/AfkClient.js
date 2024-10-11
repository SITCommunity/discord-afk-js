/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file AfkClient.js
 */

'use strict';

const AfkError = require('../../lib/error/AfkError');
const AfkTypeError = require('../../lib/error/AfkTypeError');
const checkUpdate = require('../util/UpdateChecker');

class AfkClient {
    constructor() {
        this.users = new Map();
    }

    // Add a user to AFK status.
    addUser(userId, afkMessage) {
        if (!userId || typeof userId !== "string") {
            throw new AfkError("userId must be a valid string.");
        } else return this.users.set(userId, afkMessage);
    }

    // Remove a user from AFK status.
    removeUser(userId) {
        if (!userId || typeof userId !== "string") {
            throw new AfkError("userId must be a valid string.");
        } else return this.users.delete(userId);
    }

    // Check if a user is in AFK status.
    findUser(userId) {
        if (!userId || typeof userId !== "string") {
            throw new AfkError("userId must be a valid string.");
        } else return this.users.has(userId);
    }

    // Get the AFK reason for a user.
    findMessage(userId) {
        if (!userId || typeof userId !== "string") {
            throw new AfkError("userId must be a valid string.");
        } else if (!this.users.get(userId)) {
            throw new AfkTypeError("reason must not empty");
        }
        return this.users.get(userId);
    }

    checkUpdate(enable = false) {
        if (typeof enable !== "boolean") {
            throw new AfkTypeError("enable must be a boolean");
        } else if (enable) {
            return checkUpdate();
        } else return;
    }
}

module.exports = AfkClient;