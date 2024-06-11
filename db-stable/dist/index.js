/**
 * @author brokenedtzjs
 * @license MIT-License
 * @copyright brokenedtzjs
 * @file index.js
 */

'use strict';

// ================================================================

const {
    AfkTypeError,
    AfkTimeout,
    AfkConnectionError,
    AfkDbError,
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
        const { token = '', log = true } = options;
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
     * @param {string} id - The user's ID.
     * @param {string} afkMessage - The AFK message.
     * @throws {AfkError} if id is not a valid string.
     * @returns {Map} The updated user map.
     */
    async addUser(options = {}) {
        const { id = '', reason = '' } = options;
        await setUser(id, reason);
    };

    /**
     * Remove a user from AFK status.
     *
     * @param {string} id - The user's ID.
     * @throws {AfkError} if id is not a valid string.
     * @returns {boolean} `true` if the user was removed, `false` otherwise.
     */
    async removeUser(id) {
        await deleteUser(id);
    };

    /**
     * Find the AFK status of a user.
     *
     * @param {string} id - The user's ID.
     * @throws {AfkError} if id is not a valid string.
     * @returns {boolean} `true` if the user is AFK, `false` otherwise.
     */
    async findUser(id) {
        const result = await searchUser(id);
        return result;
    };

    /**
     * Get the AFK message of a user.
     *
     * @param {string} id - The user's ID.
     * @throws {AfkError} if id is not a valid string.
     * @returns {string[] | undefined} The AFK message, or `undefined` if the user is not AFK.
     */
    async findMessage(id) {
        const result = await getUser(id);
        console.log(result);
        return result;
    };
};
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