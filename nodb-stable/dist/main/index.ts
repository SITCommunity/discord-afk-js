import boxen from 'boxen';
import chalk from 'chalk';
import semver from 'semver';
import pkgJson from 'package-json';
import semverDiff from 'semver-diff';
import { name, version } from '../../package.json';
import AfkError from '../../lib/error/AfkError';

/**
 * @internal
 */
interface AfkConstructor {
    new(): AfkCollections;
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): AfkCollections;
    new <K, V>(iterable: Iterable<readonly [K, V]>): AfkCollections;
    readonly prototype: AfkCollections;
    readonly [Symbol.species]: AfkConstructor;
}

/**
 * Separate interface for the constructor so that emitted js does not have a constructor that overwrites itself
 *
 * @internal
 */
interface AfkCollections {
    constructor: AfkConstructor;
}

/**
 * `discord-afk-js` is an advanced and feature-rich library for managing AFK users in your Discord bot. It offers a high-performance collection for tracking user AFK status and messages without the need for a database.
 *
 * @typeParam K - The key type this collection holds (e.g., user ID).
 * @typeParam V - The value type this collection holds (e.g., AFK message).
 * 
 * ## Getting Started
 * To use `discord-afk-js`, you can install it via npm or yarn:
 * ```
 * npm install discord-afk-js
 * ```
 * Once installed, you can import and use the `AfkCollections` class to manage AFK users in your bot.
 * 
 * ## Features
 * - Efficient AFK user management.
 * - Simple and easy-to-use API.
 * - Performance optimizations for handling large numbers of users.
 * - No need for external databases.
 * - Extensive documentation and examples.
 * - Flexible customization options.
 * - Active community support.
 * - Cross-platform compatibility.
 * 
 * ## Usage
 * Here's an example of how to get started with `discord-afk-js`:
 * 
 * ```javascript
 * const { AfkCollections } = require('discord-afk-js');
 * 
 * // Create a new instance of AfkCollections
 * const afk = new AfkCollections();
 * 
 * // Add a user to AFK status
 * afk.addUser("user123", "Away from keyboard");
 * 
 * // Check if a user is AFK
 * const isUserAFK = afk.findUser("user123");
 * 
 * if (isUserAFK) {
 *   // Get the user's AFK message
 *   const message = afk.findMessage("user123");
 *   console.log(`User is AFK with message: ${message}`);
 * }
 * ```
 * 
 * For more examples and usage, visit the {@link https://github.com/CyraTeam/discord-afk-js#readme | discord-afk-js GitHub}.
 * 
 * ## Customization
 * `discord-afk-js` allows you to customize the behavior to suit your bot's needs. You can implement your own logic for AFK management on top of the provided collection.
 * 
 * ```javascript
 * const { AfkCollections } = require('discord-afk-js');
 * 
 * // Create a custom AFK collection with a different behavior
 * class CustomAfkCollection extends AfkCollections {
 *   // Implement custom methods or overrides here
 * }
 * 
 * const customAfk = new CustomAfkCollection();
 * ```
 * 
 * ## Performance
 * `discord-afk-js` is optimized for performance. It is designed to efficiently handle AFK user tracking even in servers with a large number of users. The underlying data structure ensures fast lookups and updates.
 * 
 * ## Community Support
 * `discord-afk-js` has an active and supportive community. If you have questions or need assistance, you can reach out to the community on Discord or GitHub.
 * 
 * ## License
 * `discord-afk-js` is distributed under the MIT License, which means you can use it in both open-source and commercial projects. You are also free to modify the library to meet your specific needs.
 * 
 * ## Contribution
 * Contributions to the `discord-afk-js` library are welcome. You can contribute by opening issues, submitting pull requests, helping with documentation, or participating in discussions.
 * 
 * ## Compatibility
 * `discord-afk-js` is compatible with various Discord bot frameworks and libraries, making it a versatile choice for AFK management in your bot.
 */
declare class AfkCollections {
    clear(): void;

    /**
     * Add a user to AFK status.
     *
     * @param userId - The user's ID.
     * @param afkMessage - The AFK message.
     * 
     * @example
     * ```javascript
     * const { AfkCollections } = require('discord-afk-js');
     * 
     * const afk = new AfkCollections();
     * 
     * afk.addUser(message.author.id, [Date.now(), reason]);
     * ```
     */
    addUser(userId: string, afkMessage: string): void;

    /**
     * Remove a user from AFK status.
     *
     * @param userId - The user's ID.
     * 
     * @example
     * ```javascript
     * const { AfkCollections } = require('discord-afk-js');
     * 
     * const afk = new AfkCollections();
     * 
     * afk.removeUser(message.author.id);
     * ```
     */
    removeUser(userId: string): void;

    /**
     * Find the AFK status of a user.
     *
     * @param userId - The user's ID.
     * @returns `true` if the user is AFK, `false` otherwise.
     * 
     * @example
     * ```javascript
     * const { AfkCollections } = require('discord-afk-js');
     * 
     * const afk = new AfkCollections();
     * 
     * afk.findUser(message.author.id);
     * ```
     */
    findUser(userId: string): boolean;

    /**
     * Get the AFK message of a user.
     *
     * @param userId - The user's ID.
     * @returns The AFK message, or `undefined` if the user is not AFK.
     * 
     * @example
     * ```javascript
     * const { AfkCollections } = require('discord-afk-js');
     * 
     * const afk = new AfkCollections();
     * 
     * afk.findMessage(message.author.id);
     * ```
     */
    findMessage(userId: string[]): string | undefined;
}

const checkUpdate = async () => {
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
checkUpdate();

/**
 * The version of the `discord-afk-js` library that you are currently using.
 */
declare const versions: string;

export { AfkCollections, versions };