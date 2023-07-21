<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank" rel="noopener noreferrer"><img src="https://nodei.co/npm/discord-afk-js.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
  <p>
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img alt="node-current" src="https://img.shields.io/node/v/distube"></a>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank" rel="noopener noreferrer"><img alt="npm" src="https://img.shields.io/npm/dt/discord-afk-js"></a>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank" rel="noopener noreferrer"><img alt="npm latest" src="https://img.shields.io/npm/v/discord-afk-js/latest?color=blue&label=discord-afk-js%40latest&logo=npm"></a>
    <a href="https://github.com/skick1234/CyraTeam/discord-afk-js" target="_blank" rel="noopener noreferrer"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/CyraTeam/discord-afk-js"></a>
    <a href="https://discord.gg/qpT2AeYZRN" target="_blank" rel="noopener noreferrer"><img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord"></a>
    <a href="https://github.com/CyraTeam/discord-afk-js" target="_blank" rel="noopener noreferrer"><img alt="Visitor" src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FCyraTeam%2Fdiscord-afk-js&countColor=%2337d67a&style=flat"></a>
    <a href="https://github.com/CyraTeam/discord-afk-js/issues" target="_blank" rel="noopener noreferrer"><img alt="Issues" src="https://img.shields.io/github/issues/CyraTeam/discord-afk-js"></a>
    <a href="https://github.com/CyraTeam/discord-afk-js" target="_blank" rel="noopener noreferrer"><img alt="Commit" src="https://img.shields.io/github/commit-activity/y/CyraTeam/discord-afk-js?label=Commit%20Activity&logo=github"></a>
    <a href="https://cyrabot.groups.id/" target="_blank" rel="noopener noreferrer"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fcyrabot.groups.id%2F"></a>
  </p>
</div>

# discord-afk-js
[discord-afk-js](https://github.com/CyraTeam/discord-afk-js) package for more easy to make afk command without db (database)

## Install
- NPM
```
npm i discord-afk-js
```

## Requirements
- [NodeJS](https://nodejs.org) 16.9.0 or higher
- [DiscordJS](https://discord.js.org) v14

## Quick example
```js
const { afk } = require('discord-afk-js');
const reason = args.join(' ') || 'No Reason';
afk.set(message.author.id, [Date.now(), reason]);
message.reply(`${message.member} now afk!\nReason: ${reason}`);
```

## More Example
- bot.js
```js
const { Events } = require('discord.js');
const { afk } = require('discord-afk-js');
const moment = require('moment');

client.on(Events.MessageCreate, async(message) => {
  const member = message.mentions.members.first();
  const data = afk.get(member.id);
  if(data) {
    const [timestamp, reason] = data;
    const timeago = moment(timestamp).fromNow();
    message.reply(`${member} afk right now, Reason: ${reason} ${timeago}`)
  };
  const getdata = afk.get(message.author.id);
  if(getdata) {
    afk.delete(message.author.id);
    message.reply(`${message.member} removed you from afk`);
  };
});
```
- afk.js
```js
//example using events
const { afk } = require('discord-afk-js');

module.exports = {
  name: 'afk',

  run: async(client, message, args) => {
    const reason = args.join(' ') || 'No Reason';
    afk.set(message.author.id, [Date.now(), reason]);
    message.reply(`${message.member} now afk!\nReason: ${reason}`);
  },
};

//example without using events
const { Events } = require('discord.js');
const { afk } = require('discord-afk-js');

client.on(Events.MessageCreate, async(message) => {
  const reason = args.join(' ') || 'No Reason';
  afk.set(message.author.id, [Date.now(), reason]);
  message.reply(`${message.member} now afk!\nReason: ${reason}`);
});
```

# Changelog | Migrating to discord-afk-js

```diff
+ afk.set();
- afk.add();

+ afk.delete();
- afk.remove();

+ afk.get();
- afk.search();
```

## Join our Discord server
  <a href="https://discord.gg/qpT2AeYZRN" target="_blank" rel="noopener noreferrer"><img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord"></a>

## Advertising
<div align="center">
  <p>
  <a>CyraBot</a>
  <a>need security bot for your discord servers? listening music?</a>
  <a>all you need on here</a>
  <a>[Website](https://www.cyrabot.my.id/) | [Invite](https://www.cyrabot.my.id/invite/)
</div>

## License & Copyright
```
This Project under MIT License
Copyright (c) 2023-present CyraTeam
```