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
  </p>
</div>

# discord-afk-js
**[discord-afk-js](https://www.npmjs.com/package/discord-afk-js?activeTab=readme)** is a JavaScript library created to facilitate the management of AFK (Away From Keyboard) status within Discord bots. This library is designed to simplify the process of tracking and handling AFK users in a Discord server without the need for an external database.

# Requirements
- [NodeJS](https://nodejs.org) 16.9.0 or higher

# Installation
To start using **discord-afk-js**, you can install it through npm, the Node.js package manager. Open your terminal and run the following command:

```bash
npm install discord-afk-js
```

# Usage
**discord-afk-js** offers a straightforward way to manage AFK users in your Discord bot. Below is an example of how to utilize the **AfkCollections** class:

```javascript
const { AfkCollections } = require('discord-afk-js');

// Create an instance of AfkCollections
const afk = new AfkCollections();

// Adding a user to AFK status
afk.addUser('user123', 'I am currently AFK');
// or
afk.addUser('user123', [Date.now(), 'I am currently AFK');

// Checking if a user is AFK
if (afk.findUser('user123')) {
  console.log('User is marked as AFK');
  console.log('AFK Message:', afk.afkMessage('user123'));
}
// or
if (afk.findUser('user123')) {
  console.log('User is marked as AFK');
  const data = afk.findMessage('user123');

  const [ time, reason ] = data;
  const timeago = moment(time).fromNow();

  console.log('AFK Message:', `${reason} ${timeago}`);
}

// Removing a user from AFK status
afk.removeUser('user123');
```
In the code snippet above, we start by importing the **AfkCollections** class. After creating an instance of this class, we demonstrate how to add a user to the AFK list, check their AFK status, and remove them from AFK status.

# API
The **discord-afk-js** library provides a set of methods for working with AFK status using the **AfkCollections** class.

# Changelog | Migrating to discord-afk-js
```diff
- removing unused depencies

+ fix known security major
+ added update notifier
+ added error handling
```
<div align="center"><img src="https://cdn.discordapp.com/attachments/1038704467828281346/1164099747913666601/update_notifier.png?ex=6541fb5f&is=652f865f&hm=6e478ba02b149d1f35725f80340d9b28eb2cdeb0e7e5632cdfe081c583f6b473&"></img></div>

# License
This project is open-source and is licensed under the MIT License. You can find more details about the license in the [LICENSE.md](https://github.com/CyraTeam/discord-afk-js/blob/main/LICENSE) file included in the project.

With this comprehensive readme, you have a clear and detailed guide on how to use the **discord-afk-js** library to manage AFK status in your Discord bot.

# Discord Servers
  <a href="https://discord.gg/qpT2AeYZRN" target="_blank" rel="noopener noreferrer"><img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord"></a>
