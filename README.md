<!-- Aligning content to the center -->
<div align="center">
  <!-- Displaying the npm package information with a link -->
  <p>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank" rel="noopener noreferrer">
      <img src="https://nodei.co/npm/discord-afk-js.png?downloads=true&downloadRank=true&stars=true">
    </a>
  </p>
  <!-- Displaying various shields for Node.js, npm, GitHub, Discord, and visitor statistics -->
  <p>
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
      <img alt="node-current" src="https://img.shields.io/node/v/distube">
    </a>
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank" rel="noopener noreferrer">
      <img alt="npm" src="https://img.shields.io/npm/dt/discord-afk-js">
    </a>
    <!-- Other shields for npm version, GitHub stars, Discord, visitors, issues, commit activity, and codecov -->
    <a href="https://www.npmjs.com/package/discord-afk-js" target="_blank" rel="noopener noreferrer">
      <img alt="npm latest" src="https://img.shields.io/npm/v/discord-afk-js/latest?color=blue&label=discord-afk-js%40latest&logo=npm">
    </a>
    <a href="https://github.com/skick1234/SITCommunity/discord-afk-js" target="_blank" rel="noopener noreferrer">
      <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/SITCommunity/discord-afk-js">
    </a>
    <a href="https://discord.gg/yyaxUHTRSa" target="_blank" rel="noopener noreferrer">
      <img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord">
    </a>
    <a href="https://github.com/SITCommunity/discord-afk-js" target="_blank" rel="noopener noreferrer">
      <img alt="Visitor" src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FCyraTeam%2Fdiscord-afk-js&countColor=%2337d67a&style=flat">
    </a>
    <a href="https://github.com/SITCommunity/discord-afk-js/issues" target="_blank" rel="noopener noreferrer">
      <img alt="Issues" src="https://img.shields.io/github/issues/SITCommunity/discord-afk-js">
    </a>
    <a href="https://github.com/SITCommunity/discord-afk-js" target="_blank" rel="noopener noreferrer">
      <img alt="Commit" src="https://img.shields.io/github/commit-activity/y/SITCommunity/discord-afk-js?label=Commit%20Activity&logo=github">
    </a>
    <a href="https://codecov.io/gh/SITCommunity/discord-afk-js">
      <img src="https://codecov.io/gh/SITCommunity/discord-afk-js/graph/badge.svg?token=98ZKDNNXVE"/>
    </a>
  </p>
</div>

<!-- Heading for the library -->

# discord-afk-js

**[discord-afk-js]** is an npm package designed for Discord bot developers. It facilitates efficient AFK user management with seamless integration capabilities for external databases.

<!-- Section for system requirements -->

# Requirements

- [NodeJS] 18.x or higher

<!-- Section for installation instructions -->

# Installation

To use **discord-afk-js** with database versions, install it through npm, the Node.js package manager. Run the following command in your terminal:

```bash
npm install discord-afk-js@[database version]
```
Note: you can get database versions from [Here]

<!-- Section for usage examples -->

# Usage

discord-afk-js database versions provide a straightforward way to manage AFK users in your Discord bot. Below is an example of how to use the AfkClient class:

```javascript
// Importing necessary modules
const { AfkClient } = require("discord-afk-js");

// Creating an instance of AfkClient
const afk = new AfkClient();

// Connecting to the database (using MongoDB only)
// Important! Set log to 'false', default 'true'
afk.connect({ token: "token", log: false });

// Adding a user to AFK status
const reasons = args.join(" ");
const userId = message.author.id;
afk.setUser({ id: userId, reason: reason });

if (afk.findUser(user)) {
  console.log("User is marked as AFK");
  const data = afk.getReason(user);

  console.log("AFK Message:", `${data.reason} ${data.timeData}`);
}

// Removing a user from AFK status
afk.removeUser(user);
```

<!-- Section for Changelog and Migration -->

# Changelog | Migrating to discord-afk-js

```diff
+ addUser > setUser
+ findMessage > getReason
+ toggle check update
```

<!-- Section for License information -->

# License

This project is open-source and is licensed under the MIT License. Find more details in the [LICENSE.md](https://github.com/SITCommunity/discord-afk-js/blob/main/LICENSE) file included in the project.

<!-- Section for Discord server information -->

# Discord Servers

<a href="https://discord.gg/qpT2AeYZRN" target="_blank" rel="noopener noreferrer">
  <img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=SITCommunity&logo=discord">
</a>

[Here]: https://www.npmjs.com/package/discord-afk-js?activeTab=versions
[NodeJS]: https://nodejs.org
[discord-afk-js]: https://www.npmjs.com/package/discord-afk-js?activeTab=readme