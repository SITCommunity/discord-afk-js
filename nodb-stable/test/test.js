const { AfkCollections, versions } = require("../dist/main");

test("add function", () => {
  // 1
  const afks = new AfkCollections();

  afks.addUser("user123", "test");
  const user = afks.findUser('user123');

  console.log("AFK Message:", `${afks.findMessage("user123")}`);
  afks.removeUser('user123');

  // 2
  const afk = new AfkCollections();
  const moment = require("moment");

  afk.addUser('user123', [Date.now(), "test"]);
  const users = afk.findUser('user123');
  const [ time, reason ] = afk.findMessage("user123");

  const timeago = moment(time).fromNow();

  console.log("AFK Message:", `${users} ${reason} ${timeago}`);
  afk.removeUser('user123');

  console.log(versions);
});
