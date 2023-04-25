const { Collection } = require('discord.js');

/**
 *set afk more easy
 *@example afk.set(userId: string, [Date.now(), reason: string])
 */
const afk = new Collection();

module.exports = { afk };