const { AfkClient, versions } = require('../dist');
const afk = new AfkClient();

afk.connect({ token: 'mongodb+srv://Discord:quit75gamingpro@bot.zobkl.mongodb.net/rickastley' });
//afk.addUser({ id: '123456', reason: 'test' });
//const user = afk.findUser('123456');
//console.log(user);
//const reason = afk.findMessage('123456');
//console.log(reason);
afk.removeUser('123456');