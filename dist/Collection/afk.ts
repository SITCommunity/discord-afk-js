import { Collection } from '@discordjs/collection';
import updateNotifier from 'update-notifier';
import pkgjs from '../../package.json' assert { type: 'json' };

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
const notifier = updateNotifier({ pkg: pkgjs, updateCheckInterval: 1000 * 60 * 60 * 24 })
notifier.notify();
console.log(notifier.update);

export { afk, version };
//# sourceMappingURL=afk.ts.map