/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file index.js
 */

'use strict';

// =================================================================

const mongo = require("mongoose");
const afkdb = require('../db/afkdata');
const {
    AfkConnectionError,
    errorCode
} = require("../error");

let isConnected = false;

// =================================================================

async function mongoConnect(token, log = true) {
    isConnected = true;
    await mongo.connect(token).catch((e) => {
        isConnected = false;
        throw new AfkDbError(errorCode.DbError, `${e}`);
    }).then(() => {
        if (isConnected && log) console.info("Connected to MongoDB.");
    });
};

// =================================================================

async function user(id, reason = 'No Reason') {
    if (!isConnected) {
        throw new AfkConnectionError(errorCode.NotConnected);
    };
    const data = await afkdb.findOne({ userId: id });
    if (!data) {
        (await afkdb.create({ userId: id, reasonData: reason })).save();
    } else return;
};

// =================================================================

async function deleteUser(id) {
    const data = await afkdb.findOne({ userId: id });
    if (data) {
        await afkdb.deleteOne({ userId: id });
    } else return;
};

// =================================================================

async function getUser(id) {
    if (isConnected) {
        const data = await afkdb.findOne({ userId: id });
        if (data) {
            return true;
        } else return false;
    };
};

// =================================================================

async function findReason(id) {
    const data = await afkdb.findOne({ userId: id });
    if (data) {
        return data.reasonData;
    } else return;
};

// =================================================================

module.exports = {
    mongoConnect,
    user,
    deleteUser,
    getUser,
    findReason,
};