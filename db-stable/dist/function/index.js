/**
 * @author brokenedtzjs
 * @license MIT-License
 * @copyright brokenedtzjs
 * @file function.js
 */

'use strict';

// =================================================================

const boxen = require("boxen");
const chalk = require("chalk");
const semver = require("semver");
const pkgJson = require("package-json");
const semverDiff = require("semver-diff");
const mongo = require("mongoose");
const afkdb = require('../../lib/db/afkdata');

const {
    name,
    version
} = require("../../package.json");

const {
    AfkError,
    AfkDbError,
    AfkConnectionError,
} = require('../../lib/error');

let isConnected = false;
// =================================================================
async function mongoConnect(token, log = true) {
    isConnected = true;
    await mongo.connect(token).catch((e) => {
        isConnected = false;
        throw new AfkDbError(`${e}`);
    }).then(() => {
        if (isConnected && log) console.info("Connected to MongoDB.");
    });
};
// =================================================================
async function setUser(id, reason = 'No Reason') {
    if (!isConnected) {
        throw new AfkConnectionError('Not connected to MongoDB');
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
async function searchUser(id) {
    if (isConnected) {
        const data = await afkdb.findOne({ userId: id });
        if (data) {
            return true;
        } else return false;
    };
};
// =================================================================
async function getUser(id) {
    const data = await afkdb.findOne({ userId: id });
    if (data) {
        return data.reasonData;
    } else return;
};
// =================================================================
async function checkUpdate() {
    try {
        const { version: latestVersion } = await pkgJson(name);
        const updateAvailable = semver.lt(version, latestVersion);

        if (updateAvailable) {
            const verDiff = semverDiff(version, latestVersion);
            if (verDiff) {
                const msg = {
                    updateAvailable: `New update available ${chalk.dim.red(
                        version
                    )} → ${chalk.green(latestVersion)}`,
                    runUpdate: `Run ${chalk.cyanBright(
                        `npm i ${name}@latest`
                    )} to update`,
                };
                console.log(
                    boxen(`${msg.updateAvailable}\n${msg.runUpdate}`, {
                        title: "Update Detected",
                        borderColor: "magentaBright",
                        margin: 1,
                        padding: 1,
                        titleAlignment: "center",
                        align: "center",
                    })
                );
            }
        }
    } catch (e) {
        throw new AfkError(e);
    }
};
// =================================================================
module.exports = {
    mongoConnect,
    setUser,
    deleteUser,
    searchUser,
    getUser,
    checkUpdate,
};