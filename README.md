<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank"><img src="https://nodei.co/npm/discord-afk-js.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
  <p>
    <a href="https://nodejs.org/" target="_blank"><img alt="node-current" src="https://img.shields.io/node/v/distube"></a>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/discord-afk-js"></a>
    <a href="https://www.npmjs.com/package/discord-afk-js"><img alt="npm latest" src="https://img.shields.io/npm/v/discord-afk-js/latest?color=blue&label=discord-afk-js%40latest&logo=npm"></a>
    <a href="https://github.com/skick1234/CyraTeam/discord-afk-js" target="_blank"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/CyraTeam/discord-afk-js"></a>
    <a href="https://discord.gg/qpT2AeYZRN" target="_blank"><img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord"></a>
    <a href="https://github.com/CyraTeam/discord-afk-js"><img alt="Visitor" src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FCyraTeam%2Fdiscord-afk-js&countColor=%2337d67a&style=flat"></a>
    <a href="https://github.com/CyraTeam/discord-afk-js/issues"><img alt="Issues" src="https://img.shields.io/github/issues/CyraTeam/discord-afk-js"></a>
    <a href="https://github.com/CyraTeam/discord-afk-js"><img alt="Commit" src="https://img.shields.io/github/commit-activity/y/CyraTeam/discord-afk-js?label=Commit%20Activity&logo=github"></a>
    <a href="https://cyrabot.groups.id/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fcyrabot.groups.id%2F"></a>
  </p>
</div>

# Discord RPC
[discord-afk-js](https://github.com/CyraTeam/discord-afk-js) package for more easy to make afk command without db (database)

## Install
- NPM
```
npm i discord-afk-js
```

## Quick example
```js
const { afk } = require('discord-afk-js');
const reason = args.join(' ') || 'No Reason';
afk.set(message.author.id, [Date.now(), reason]);
message.reply(`set afk to ${message.member}, Reason: ${reason}`);
```

## More Example
bot.js
```js

```
afk.js
```js
const { afk } = require('discord-afk-js');
const reason = args.join(' ') || 'No Reason';
afk.set(message.author.id, [Date.now(), reason]);
message.reply(`set afk to ${message.member}, Reason: ${reason}`);
```

Join our Discord server [here](https://cyrabot.groups.id/discord/)

## Licence & Copyright

```
This Project under Apache License 2.0
Copyright (c) 2021-present CyraTeam
```