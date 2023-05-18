"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afk = void 0;

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) =>
  __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  afk: () => afk,
  version: () => version,
});
module.exports = __toCommonJS(src_exports);

const { Collection } = require("@discordjs/collection");
const afk = new Collection();
const updateNotifier = require('update-notifier');
const pkgjs = require('../../package.json');

__name(afk, "afk");
const version = "1.4.0";
const notifier = updateNotifier({ pkg: pkgjs, updateCheckInterval: 1000 * 60 * 60 * 24 })
if(notifier.update) {
    console.log("\n\n");
    console.log( "discord-afk-js outdated version, please update to latest version");
    console.log("\x1b[34m" + `|                ${notifier.update}                  |`);
    console.log("\n\n");
};

module.exports = {
  afk,
  version,
};
