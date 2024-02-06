const { AfkClient, versions } = require('../dist');
const afk = new AfkClient();
test("add function", async () => {
    afk.connect({ token: '' });

    afk.addUser({ id: '123456' });

    const user = await afk.findUser('123456');
    console.log(user);

    const reason = await afk.findMessage('123456');
    console.log(reason);

    afk.removeUser('123456');
});