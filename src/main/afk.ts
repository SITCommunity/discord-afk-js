import { AfkCollection } from '../../dist/main/afkcollection';
import updateNotifier from 'update-notifier';
import packages from '../../package.json' assert { type: 'json' };

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
const notifier = updateNotifier({ pkg: packages });
if(notifier.update) {
  console.log("\n\n");
  console.log( "discord-afk-js outdated version detected, please update to latest version");
  console.log("\x1b[34m" + `|                ${notifier.update.current} -> ${notifier.update.latest}                  |`);
  console.log("\n\n");
};

export { afk, version };
//# sourceMappingURL=afk.ts.map