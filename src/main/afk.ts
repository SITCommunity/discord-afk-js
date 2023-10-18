import { AfkCollections, versions } from '../../dist/main/collection';
import boxen from 'boxen';
import chalk from 'chalk';
import semver from 'semver';
import pkgJson from 'package-json';
import semverDiff from 'semver-diff';
import { name, version } from '../../package.json';

const checkUpdate = async () => {
    const { version: latestVersion } = await pkgJson(name).catch(e => {
        throw new TypeError(e);
    });
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
            throw new TypeError(e);
        };
    };
};

/**
 * discord-afk-js package for more easy to make afk command without db (database)
 *
 * click this for example about {@link https://github.com/CyraTeam/discord-afk-js/#readme | discord-afk-js} package
 */
const afk = new AfkCollections<any, any>();
checkUpdate();

export { afk, versions };
//# sourceMappingURL=afk.ts.map