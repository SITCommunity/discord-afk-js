'use strict'

const { AfkClient, versions } = require("../src");

test("add function", async () => {
  // 1
  const afk1 = new AfkClient();

  afk1.addUser("12345678", "test");
  const user = afk1.findUser('12345678');

  console.log("AFK Message:", `${afk1.findMessage("12345678")}`);
  afk1.removeUser('12345678');

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
