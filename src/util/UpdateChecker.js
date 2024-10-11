/**
 * @author brokenedtzjs
 * @license MIT
 * @copyright brokenedtzjs
 * @file UpdateChecker.js
 */

'use strict';

const AfkError = require('../../lib/error/AfkError');
const boxen = require("boxen");
const chalk = require("chalk");
const semver = require("semver");
const pkgJson = require("package-json");
const semverDiff = require("semver-diff");
const { name, version } = require("../../package.json");

// Checking update from npm packages
const checkUpdate = async () => {
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
    return;
};

module.exports = checkUpdate