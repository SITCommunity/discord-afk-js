/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file UpdateChecker.js
 */

'use strict';

const boxen = require("boxen");
const chalk = require("chalk");
const semver = require("semver");
const pkgJson = require("package-json");
const semverDiff = require("semver-diff");
const {
    name,
    version
} = require("../../package.json");
const {
    AfkError,
    AfkTypeError,
    errorCode
} = require("../error");

// Checking update from discord-afk-js
async function checkingUpdate(enable = false) {
    if (typeof enable !== "boolean") {
        throw new AfkTypeError(errorCode.InvalidType, 'options', 'boolean', true);
    } else if (enable) {
        return UpdateInit();
    } else return;
}

// Checking update from npm packages
const UpdateInit = async () => {
    try {
        const packageInfo = await pkgJson(name);
        if (!packageInfo || !packageInfo.version) {
            throw new AfkError(errorCode.InvalidPackageInfo);
        }

        const { version: latestVersion } = packageInfo;
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
        throw new AfkError(errorCode.CheckUpdateFailed, e.message);
    }
    return;
};

module.exports = {
    UpdateInit,
    checkingUpdate
};