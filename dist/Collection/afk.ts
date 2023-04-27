import { Collection } from '@discordjs/collection';

/**
 *discord-afk-js package for more easy to make afk command without db (database)
 *@example
 *```js
 *afk.set(userId: string, [Date.now(), reason: string])
 *afk.get(userId: string)
 *```
 */
const afk = new Collection<any, any>();

/**
 * The {@link https://github.com/CyraTeam/discord-afk-js/#readme | discord-afk-js} version
 * that you are currently using.
 */
declare const version: string;

export { afk, version };
//# sourceMappingURL=afk.ts.map