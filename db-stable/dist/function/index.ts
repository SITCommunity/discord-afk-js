// =================================================================

import boxen from 'boxen';
import chalk from 'chalk';
import semver from 'semver';
import pkgJson from 'package-json';
import semverDiff from 'semver-diff';
import { connect } from 'mongoose';
import afkdb from '../../lib/db/afkdata';

import {
    AfkError,
    AfkDbError,
    AfkConnectionError,
} from '../../lib/error';

import {
    name,
    version
} from '../../package.json';

let isConnected: boolean = false;
// =================================================================
async function mongoConnect(token: string, log: boolean = true): Promise<void> {
    isConnected = true;
    await connect(token).catch((e) => {
        isConnected = false;
        throw new AfkDbError(`${e}`);
    }).then(() => {
        if (isConnected && log) console.info("Connected to MongoDB.");
    });
};
// =================================================================
async function setUser(userId: string, reason: string) {
    if (!isConnected) {
        throw new AfkConnectionError('Not connected to MongoDB');
    };
    const data = await afkdb.findOne({ Id: userId });
    if (!data) {
        (await afkdb.create({ Id: userId, reasonData: reason })).save();
    } else return;
};
// =================================================================
async function deleteUser(userId: string) {
    const data = await afkdb.findOne({ Id: userId });
    if (data) {
        await afkdb.deleteOne({ Id: userId });
    } else return;
};
// =================================================================
async function searchUser(userId: string) {
    const data = await afkdb.findOne({ Id: userId });
    if (data) {
        return true;
    } else return false;
};
// =================================================================
async function getUser(userId: string) {
    const data = await afkdb.findOne({ Id: userId });
    if (data) {
        return data.reasonData;
    } else return;
};
// =================================================================
async function checkUpdate() {
    const { version: latestVersion } = await pkgJson(name);
    const updateAvailable = semver.lt(version, latestVersion as string);

    if (updateAvailable) {
        try {
            const verDiff = semverDiff(version, latestVersion as string);
            if (verDiff) {
                const msg = {
                    updateAvailable: `new update available ${chalk.dim.red(version)} → ${chalk.green(latestVersion)}`,
                    runUpdate: `Run ${chalk.cyanBright(`npm i ${name}@latest`)} to update`,
                };
                console.log(boxen(`${msg.updateAvailable}\n${msg.runUpdate}`, {
                    title: 'update detected',
                    borderColor: 'magentaBright',
                    margin: 1,
                    padding: 1,
                    textAlignment: 'center',
                    align: 'center',
                }));
            };
        } catch (e) {
            throw new AfkError(e);
        };
    };
};
// =================================================================
export {
    mongoConnect,
    setUser,
    deleteUser,
    searchUser,
    getUser,
    checkUpdate,
}