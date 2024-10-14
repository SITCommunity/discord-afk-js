import { AfkClient, versions } from '.'

const afk1: AfkClient = new AfkClient();

afk1.setUser("12345678", "test");

console.log("AFK Message:", `${afk1.getReason("12345678")}`);
afk1.removeUser('12345678');

// 2
const afk: AfkClient = new AfkClient();

afk.setUser('12345678', [Date.now(), "test"]);
const users = afk.findUser('12345678');

const reason = afk.getReason("12345678");
console.log("AFK Message:", `${users} ${reason}`);

afk.removeUser('12345678');

// checking versions
console.log(versions);