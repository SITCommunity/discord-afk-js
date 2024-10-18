/**
 * @author brokenedtzjs
 * @license MIT-License
 * @copyright brokenedtzjs
 * @file index.js
 */

'use strict';

const {
    AfkTypeError,
    AfkTimeout,
    AfkConnectionError,
    AfkDbError,
    errorCode,
} = require('../error');

const {
    mongoConnect,
    user,
    deleteUser,
    getUser,
    findReason,
} = require('../function');

class AfkClient {
    constructor() {
        this.isConnected = false;
        this.token = undefined;
    };

    // Connect to mongoose
    async connect(options = {}) {
        const { token, log } = options;
        try {
            if(!token)
                throw new AfkTypeError(errorCode.NoToken);

            if (!token.startsWith("mongodb"))
                throw new AfkDbError(errorCode.InvalidURL);
            await mongoConnect(token, log);
            this.isConnected = true;
        } catch (error) {
            this.isConnected = false;
            if (error instanceof AfkTypeError) {
                console.error(error.message);
            } else if (error.message === 'MongoDB connection timed out') {
                throw new AfkTimeout(errorCode.Timeout);
            } else {
                throw new AfkConnectionError(errorCode.ConnectionError, error);
            };
        };
    };

    // Set user in afk status
    async setUser(options = {}) {
        const { id, reason } = options;
        await user(id, reason);
    };

    // Remove user from afk status
    async removeUser(id) {
        await deleteUser(id);
    };

    // Find user status
    async findUser(id) {
        const result = await getUser(id);
        return result;
    };

    // Get user reason
    async getReason(id) {
        const result = await findReason(id);
        console.log(result);
        return result;
    };

    // Check update
    checkUpdate(options = {}) {
        const { enable } = options;
        checkingUpdate(enable);
    }
};
module.exports = AfkClient;