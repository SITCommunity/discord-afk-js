export declare interface ConnectionOptions {
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
};

export declare interface UserOptions {
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
};

export { };