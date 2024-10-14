/**
 * @internal
 */
export interface AfkConstructor {
    new(): AfkClient;
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): AfkClient;
    new <K, V>(iterable: Iterable<readonly [K, V]>): AfkClient;
    readonly prototype: AfkClient;
    readonly [Symbol.species]: AfkConstructor;
}

/**
 * Separate interface for the constructor so that emitted js does not have a constructor that overwrites itself
 *
 * @internal
 */
export interface AfkClient {
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
 * Once installed, you can import and use the `AfkClient` class to manage AFK users in your bot.
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
 * const { AfkClient } = require('discord-afk-js');
 * 
 * // Create a new instance of AfkClient
 * const afk = new AfkClient();
 * 
 * // Add a user to AFK status
 * afk.setUser("user123", "Away from keyboard");
 * 
 * // Check if a user is AFK
 * const isUserAFK = afk.findUser("user123");
 * 
 * if (isUserAFK) {
 *   // Get the user's AFK message
 *   const message = await afk.getReason("user123");
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
 * const { AfkClient } = require('discord-afk-js');
 * 
 * // Create a custom AFK collection with a different behavior
 * class CustomAfkCollection extends AfkClient {
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
export declare class AfkClient {
    constructor();

    /**
     * Add a user to AFK status.
     *
     * @param id - The user's ID.
     * @param reason - The AFK message.
     * 
     * @example
     * ```javascript
     * const { AfkClient } = require('discord-afk-js');
     * 
     * const afk = new AfkClient();
     * 
     * afk.setUser(message.author.id, [Date.now(), reason]);
     * ```
     */
    setUser(id: string, reason: string): void;
    setUser(id: string, reason: [number, string]): void;

    /**
     * Remove a user from AFK status.
     *
     * @param id - The user's ID.
     * 
     * @example
     * ```javascript
     * const { AfkClient } = require('discord-afk-js');
     * 
     * const afk = new AfkClient();
     * 
     * afk.removeUser(message.author.id);
     * ```
     */
    removeUser(id: string): void;

    /**
     * Find the AFK status of a user.
     *
     * @param id - The user's ID.
     * @returns `true` if the user is AFK, `false` otherwise.
     * 
     * @example
     * ```javascript
     * const { AfkClient } = require('discord-afk-js');
     * 
     * const afk = new AfkClient();
     * 
     * afk.findUser(message.author.id);
     * ```
     */
    findUser(id: string): boolean;

    /**
     * Get the AFK message of a user.
     *
     * @param id - The user's ID.
     * @returns The AFK message, or `undefined` if the user is not AFK.
     * 
     * @example
     * ```javascript
     * const { AfkClient } = require('discord-afk-js');
     * 
     * const afk = new AfkClient();
     * 
     * afk.getReason(message.author.id);
     * ```
     */
    getReason(id: string): string | undefined;
    getReason(id: string[]): string | undefined;

    /**
     * Enable or disable updates reminder.
     *
     * @param enable - `true` to enable updates reminder, `false` to disable.
     * 
     * @default false
     */
    checkUpdate(enable: false): boolean;
}

export const versions: string;