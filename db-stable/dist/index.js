/**
 * @author brokenedtzjs
 * @license Apache-2.0
 * @copyright brokenedtzjs
 * @file index.js
 */

'use strict';

// ================================================================

const {
    AfkTimeout,
    AfkConnectionError,
    AfkDbError
} = require('../lib/error');

const {
    mongoConnect,
    setUser,
    deleteUser,
    searchUser,
    getUser,
    checkUpdate,
} = require('./function');

// =================================================================
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) =>
    __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                });
        return to;
    }
};
var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
    AfkClient: () => AfkClient,
});
module.exports = __toCommonJS(src_exports);
// =================================================================
class AfkClient {
    constructor() {
        this.isConnected = false;
        this.token = undefined;
    };

    /**
     * Connect to mongoose
     * 
     * @param {string} token
     * @param {string} log
     * @throws {AfkDbError}
     */
    async connect(options = {}) {
        const { token, log = true } = options;
        try {
            if (!token.startsWith("mongodb"))
                throw new AfkDbError("Invalid MongoURL");
            await mongoConnect(token, log);
            this.isConnected = true;
        } catch (error) {
            this.isConnected = false;
            if (error instanceof AfkTypeError) {
                console.error(error.message);
            } else if (error.message === 'MongoDB connection timed out') {
                console.error('MongoDB connection timed out');
                throw new AfkTimeout('MongoDB connection timed out');
            } else {
                console.error('MongoDB connection error:', error.message);
                throw new AfkConnectionError('MongoDB connection error');
            };
        };
    };

    /**
     * Add a user to AFK status.
     *
     * @param {string} userId - The user's ID.
     * @param {string} afkMessage - The AFK message.
     * @throws {AfkError} if userId is not a valid string.
     * @returns {Map} The updated user map.
     */
    async addUser(userId, reason) {
        return setUser(userId, reason);
    };

    /**
     * Remove a user from AFK status.
     *
     * @param {string} userId - The user's ID.
     * @throws {AfkError} if userId is not a valid string.
     * @returns {boolean} `true` if the user was removed, `false` otherwise.
     */
    async removeUser(userId) {
        return deleteUser(userId);
    }

    /**
     * Find the AFK status of a user.
     *
     * @param {string} userId - The user's ID.
     * @throws {AfkError} if userId is not a valid string.
     * @returns {boolean} `true` if the user is AFK, `false` otherwise.
     */
    async findUser(userId) {
        const results = await searchUser(userId);
        return results;
    }

    /**
     * Get the AFK message of a user.
     *
     * @param {string} userId - The user's ID.
     * @throws {AfkError} if userId is not a valid string.
     * @returns {string[] | undefined} The AFK message, or `undefined` if the user is not AFK.
     */
    async findMessage(userId) {
        const results = await getUser(userId);
        return results;
    }
}
__name(AfkClient, "AfkClient");
// =================================================================
/**
 * Check update before notify to console.
 */
checkUpdate();
// =================================================================
var versions = `${require("../package.json").version}`;
// =================================================================
module.exports = {
    AfkClient,
    versions,
};