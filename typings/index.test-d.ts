import { AfkClient, versions } from '.'

const afk1: AfkClient = new AfkClient();

afk1.setUser("12345678", "test");

console.log("AFK Message:", `${afk1.getReason("12345678")}`);
afk1.removeUser('12345678');

// 2
const afk: AfkClient = new AfkClient();
import moment from 'moment';

afk.setUser('12345678', [Date.now(), "test"]);
const users = afk.findUser('12345678');

const afkMessages = afk.getReason("12345678");

if (afkMessages) {
    const [time, reason] = afkMessages;
    const timeago = moment(time).fromNow();
    console.log("AFK Message:", `${users} ${reason} ${timeago}`);
} else {
    console.log(`No AFK message found for ${users}]`);
}

afk.removeUser('12345678');

// checking versions
console.log(versions);