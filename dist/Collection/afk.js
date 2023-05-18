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
const { searchForNewUpdate } = require("../function/version.ts").default;

__name(afk, "afk");
const version = "1.4.0";
searchForNewUpdate({ state: true })

module.exports = {
  afk,
  version,
};
