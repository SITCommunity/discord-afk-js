import { default as updateNotifier } from 'update-notifier';
import packages from '../../package.json' assert { type: 'json' };
import { AfkCollection } from '../../dist/main/afkcollection';

//afk collection
/**
 * discord-afk-js package for more easy to make afk command without db (database)
 *
 * click this for example about {@link https://github.com/CyraTeam/discord-afk-js/#readme | discord-afk-js} package
 */
const afk = new AfkCollection<any, any>();

//version of discord-afk-js package
/**
 * The {@link https://github.com/CyraTeam/discord-afk-js/#readme | discord-afk-js} version
 * that you are currently using.
 */
declare const version: string;

//notifier update package
const notifier = updateNotifier({ pkg: packages, updateCheckInterval: 1000 * 60 * 60 * 24 })
notifier.notify();
console.log(notifier.update);

export { afk, version };
//# sourceMappingURL=afk.ts.map