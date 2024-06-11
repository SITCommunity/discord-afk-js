// ================================================================

import {
    AfkTypeError,
    AfkDbError,
    AfkTimeout,
    AfkConnectionError,
} from '../lib/error';

import {
    mongoConnect,
    setUser,
    deleteUser,
    searchUser,
    getUser,
    checkUpdate,
} from './function';

import {
    ConnectionOptions,
    UserOptions,
} from './options';

// ================================================================
/**
 * ## Introduction
 * `discord-afk-js` is an npm package designed for Discord bot developers who require efficient AFK user management with seamless integration capabilities for external databases.
 * 
 * ## Features
 * - Robust AFK user management with optional support for external databases.
 * - Streamlined API for easy integration, accommodating diverse storage preferences.
 * - Performance optimizations tailored to handle large user bases effectively.
 * - Flexibility to utilize external databases, ensuring persistent data storage.
 * - Comprehensive documentation and examples catering to different storage scenarios.
 * - Customization options providing adaptability to various bot requirements.
 * - Active community support for both in-memory and database-backed solutions.
 * - Cross-platform compatibility, compatible with various bot frameworks and libraries.
 * 
 * ## Getting Started
 * To use `discord-afk-js`, install it via npm or yarn:
 * ```bash
 * npm install discord-afk-js@database
 * ```
 * Once installed, import and use the `AfkClient` class to manage AFK users in your bot.
 * 
 * ## Usage
 * Example of getting started with `discord-afk-js`:
 * 
 * ```javascript
 * const { AfkClient } = require('discord-afk-js');
 * 
 * // Create a new instance of AfkClient
 * const afk = new AfkClient();
 * 
 * // Connect to the database (using MongoDB only)
 * // Important! Set log to 'false' for default 'true'
 * afk.connect({ token: 'token', log: 'false' });
 * 
 * // Add a user to AFK status
 * afk.addUser({ id: "user123", reason: "Away from keyboard" });
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
 * Console output:
 * ```cmd
 * User is AFK with message: Away from keyboard a few seconds ago.
 * ```
 * 
 * For more examples and usage, visit the [discord-afk-js GitHub](https://github.com/CyraTeam/discord-afk-js#readme).
 * 
 * ## Customization
 * `discord-afk-js` allows you to customize behavior to suit your bot's needs. Implement your own logic for AFK management on top of the provided collection.
 * 
 * ```javascript
 * const { AfkClient } = require('discord-afk-js');
 * 
 * // Create a custom AFK collection with different behavior
 * class CustomAfkCollection extends AfkClient {
 *   // Implement custom methods or overrides here
 * }
 * 
 * const customAfk = new CustomAfkCollection();
 * ```
 * 
 * ## Performance
 * `discord-afk-js` is optimized for performance, efficiently handling AFK user tracking even in servers with a large number of users. The underlying data structure ensures fast lookups and updates.
 * 
 * ## Community Support
 * `discord-afk-js` has an active and supportive community. For questions or assistance, reach out to the community on Discord or GitHub.
 * 
 * ## License
 * `discord-afk-js` is distributed under the Apache 2.0 License, allowing use in both open-source and commercial projects. You are free to modify the library to meet your specific needs.
 * 
 * ## Contribution
 * Contributions to the `discord-afk-js` library are welcome. Contribute by opening issues, submitting pull requests, helping with documentation, or participating in discussions.
 * 
 * ## Compatibility
 * `discord-afk-js` is compatible with various Discord bot frameworks and libraries, making it a versatile choice for AFK management in your bot.
 */
class AfkClient {
    private isConnected: boolean = false;

    /**
     * Connect to a MongoDB database.
     * 
     * This method connects to a MongoDB database using the provided connection options. 
     * If the connection is successful, the client will be marked as connected.
     * 
     * @param options - An object containing the database connection token and a log flag.
     *                  The token must be a valid MongoDB connection string.
     *                  The log flag determines whether connection logs are printed to the console.
     * @throws AfkDbError - Thrown if the provided token is not a valid MongoDB URL.
     * @throws AfkTimeout - Thrown if the MongoDB connection times out.
     * @throws AfkConnectionError - Thrown for other MongoDB connection errors.
     */
    async connect(options: ConnectionOptions): Promise<void> {
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
     * Add a user to the AFK (Away From Keyboard) status list.
     * 
     * Use this method to mark a user as AFK, providing their ID and an optional reason.
     * 
     * @param options - An object containing the user ID and the reason for being AFK.
     *                  The ID is a unique identifier for the user.
     *                  The reason is an optional string explaining why the user is AFK.
     */
    async addUser(options: UserOptions): Promise<void> {
        const { id = '', reason = '' } = options;
        await setUser(id, reason);
    };

    /**
     * Remove a user from the AFK status list.
     * 
     * Use this method to mark a user as no longer AFK by providing their unique ID.
     * 
     * @param id - The unique identifier for the user to be removed from the AFK status list.
     */
    async removeUser(id: string): Promise<void> {
        await deleteUser(id);
    };

    /**
     * Check if a user is currently marked as AFK.
     * 
     * This method checks whether a user, identified by their unique ID, is currently marked 
     * as AFK (Away From Keyboard). It returns a boolean value indicating the user's AFK status.
     * 
     * @param id - The unique identifier for the user to check.
     * @returns boolean - `true` if the user is AFK, `false` otherwise.
     */
    async findUser(id: string): Promise<boolean> {
        return searchUser(id);
    };

    /**
     * Retrieve the reason why a user is marked as AFK.
     * 
     * This method returns the reason why a user, identified by their ID, is marked as AFK.
     * 
     * @param id - The unique identifier of the user.
     * @returns string | undefined - The reason for the AFK status, or `undefined` if no reason is found.
     */
    async findMessage(id: string): Promise<string | undefined> {
        return getUser(id);
    };
};
// ================================================================
/**
 * Check for updates and notify the console if an update is available.
 * 
 * This function checks for updates to the `discord-afk-js` library and logs a message to 
 * the console if an update is available. This ensures users are aware of the latest version.
 */
checkUpdate();
// ================================================================
/**
 * The version of the `discord-afk-js` library you are currently using.
 * 
 * This constant contains the version number of the `discord-afk-js` library in use.
 * It can be used for logging, debugging, or ensuring compatibility with other parts of your project.
 */
declare const versions: string;
// ================================================================
export {
    AfkClient,
    versions,
};