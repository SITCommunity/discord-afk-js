import { Collection } from '@discordjs/collection';
import { default as searchForNewUpdate } from '../function/version';

/**
 * discord-afk-js package for more easy to make afk command without db (database)
 *
 * click this for example about {@link https://github.com/CyraTeam/discord-afk-js/#readme | discord-afk-js} package
 */
const afk = new Collection<any, any>();

/**
 * The {@link https://github.com/CyraTeam/discord-afk-js/#readme | discord-afk-js} version
 * that you are currently using.
 */
declare const version: string;

searchForNewUpdate({ state: true });

export { afk, version };
//# sourceMappingURL=afk.ts.map