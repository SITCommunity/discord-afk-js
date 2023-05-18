function searchForNewUpdate({ state = true }: { state?: boolean } = {}): void {
  if (state) _checkUpdate();
};
async function _checkUpdate(): Promise<void> {
  if (!require("node-fetch")) return;
  const packageData = await require("node-fetch")(`https://registry.npmjs.com/discord-afk-js`).then((text) => text.json());
  if (require("../../package.json").version !== packageData["dist-tags"].latest) {
    console.log("\n\n");
    console.log( "discord-afk-js outdated version, please update to latest version");
    console.log("\x1b[34m" + `|                ${require("../../package.json").version} --> ${packageData["dist-tags"].latest}                  |`);
    console.log("\n\n");
  };
};
export default searchForNewUpdate;