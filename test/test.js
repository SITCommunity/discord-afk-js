const { AfkClient, versions } = require('../dist');
const afk = new AfkClient();
<<<<<<< Updated upstream
test("add function", async () => {
    afk.connect({ token: '' });

    afk.addUser({ id: '123456' });

    const user = await afk.findUser('123456');
    console.log(user);

    const reason = await afk.findMessage('123456');
    console.log(reason);

    afk.removeUser('123456');
});
=======

afk.connect({ token: 'mongodb+srv://Discord:quit75gamingpro@bot.zobkl.mongodb.net/rickastley' });
//afk.addUser({ id: '123456' });
//const user = afk.findUser('123456');
//console.log(user);
const reason = afk.findMessage('123456');
console.log(reason);
//afk.removeUser('123456');
>>>>>>> Stashed changes
