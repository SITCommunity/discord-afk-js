interface ConnectionOptions {
    /**
     * MongoDB connection token.
     * 
     * This token should be a valid MongoDB connection string. It is used to 
     * authenticate and establish a connection to the MongoDB database.
     */
    token?: string;

    /**
     * Enable or disable connection logs.
     * 
     * When set to `true`, detailed logs of the connection process will be printed to the console.
     * This can be useful for debugging connection issues. Defaults to `true`.
     * 
     * @default true
     */
    log?: boolean;
}

interface UserOptions {
    /**
     * Unique user identifier.
     * 
     * This is the unique ID used to identify a user in the AFK system. It can be 
     * any string that uniquely represents the user.
     */
    id?: string;

    /**
     * Reason for AFK status.
     * 
     * This is an optional string that provides the reason why the user is marked as AFK.
     * It helps other users understand why the user is not available.
     */
    reason?: string;
}

// ================================================================

/**
 * ## Introduction
 * `discord-afk-js` is an npm package designed for Discord bot developers who require efficient AFK user management with seamless integration capabilities for external databases.
 * 
 * ## Features
 * - Robust AFK user management with optional support for mongodb or mongoose databases.
 * - Performance optimizations tailored to handle large user bases effectively.
 * - Flexibility to utilize external databases, ensuring persistent data storage.
 * - Comprehensive documentation and examples catering to different storage scenarios.
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
 * afk.connect({ token: 'mongo_token', log: 'false' });
 * 
 * // Add a user to AFK status
 * afk.setUser({ id: "user123", reason: "Away from keyboard" });
 * 
 * // Check if a user is AFK
 * const isUserAFK = afk.findUser("user123");
 * 
 * if (isUserAFK) {
 *   // Get the user's AFK message
 *   const message = afk.getReason("user123");
 *   console.log(`User is AFK with message: ${message}`);
 * }
 * ```
 * 
 * Console output:
 * ```cmd
 * User is AFK with message: Away from keyboard a few seconds ago.
 * ```
 * 
 * For more examples and usage, visit the [discord-afk-js GitHub](https://github.com/SITCommunity/discord-afk-js#readme).
 * 
 * ## Performance
 * `discord-afk-js` is optimized for performance, efficiently handling AFK user tracking even in servers with a large number of users. The underlying data structure ensures fast lookups and updates.
 * 
 * ## Community Support
 * `discord-afk-js` has an active and supportive community. For questions or assistance, reach out to the community on Discord or GitHub.
 * 
 * ## License
 * `discord-afk-js` is distributed under the MIT Licnese, allowing use in both open-source and commercial projects. You are free to modify the library to meet your specific needs.
 * 
 * ## Contribution
 * Contributions to the `discord-afk-js` library are welcome. Contribute by opening issues, submitting pull requests, helping with documentation, or participating in discussions.
 * 
 * ## Compatibility
 * `discord-afk-js` is compatible with various versions of discord.js (tested on 12.x - 14.x)
 */
export declare class AfkClient {
    private isConnected: boolean;

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
    connect(options: ConnectionOptions): Promise<void>;

    /**
     * Add a user to the AFK (Away From Keyboard) status list.
     * 
     * Use this method to mark a user as AFK, providing their ID and an optional reason.
     * 
     * @param options - An object containing the user ID and the reason for being AFK.
     *                  The ID is a unique identifier for the user.
     *                  The reason is an optional string explaining why the user is AFK.
     */
    addUser(options: UserOptions): Promise<void>;

    /**
     * Remove a user from the AFK status list.
     * 
     * Use this method to mark a user as no longer AFK by providing their unique ID.
     * 
     * @param id - The unique identifier for the user to be removed from the AFK status list.
     */
    removeUser(id: string): Promise<void>;

    /**
     * Check if a user is currently marked as AFK.
     * 
     * This method checks whether a user, identified by their unique ID, is currently marked 
     * as AFK (Away From Keyboard). It returns a boolean value indicating the user's AFK status.
     * 
     * @param id - The unique identifier for the user to check.
     * @returns boolean - `true` if the user is AFK, `false` otherwise.
     */
    findUser(id: string): Promise<boolean>;

    /**
     * Retrieve the reason why a user is marked as AFK.
     * 
     * This method returns the reason why a user, identified by their ID, is marked as AFK.
     * 
     * @param id - The unique identifier of the user.
     * @returns string | undefined - The reason for the AFK status, or `undefined` if no reason is found.
     */
    findMessage(id: string): Promise<string | undefined>;

    /**
     * Check for updates and notify the console if an update is available.
     * 
     * This function checks for updates to the `discord-afk-js` library and logs a message to 
     * the console if an update is available. This ensures users are aware of the latest version.
     * 
     * @default false
     */
    checkUpdate(enable: false): void;
}

// ================================================================

/**
 * The version of the `discord-afk-js` library you are currently using.
 * 
 * This constant contains the version number of the `discord-afk-js` library in use.
 * It can be used for logging, debugging, or ensuring compatibility with other parts of your project.
 */
export declare const versions: string;