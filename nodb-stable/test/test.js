const { AfkClient, versions } = require("../dist");

test("add function", async () => {
  // 1
  const afks = new AfkClient();

  afks.addUser("12345678", "test");
  const user = afks.findUser('12345678');

  console.log("AFK Message:", `${afks.findMessage("12345678")}`);
  afks.removeUser('12345678');

  // 2
  const afk = new AfkClient();
  const moment = require("moment");

  afk.addUser('12345678', [Date.now(), "test"]);
  const users = afk.findUser('12345678');
  const [ time, reason ] = afk.findMessage("12345678");

  const timeago = moment(time).fromNow();

  console.log("AFK Message:", `${users} ${reason} ${timeago}`);
  afk.removeUser('12345678');
  console.log(versions);
});
