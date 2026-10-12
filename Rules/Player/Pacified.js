"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacified = void 0;
const Rule_1 = require("@civ-clone/core-rule/Rule");
// Whether `player` is pacified towards `other`: it isn't hostile to `other` when they negotiate (it makes no demands
//  of it and doesn't turn down its peace), and doesn't break a peace with it. A player is pacified if any match is
//  true (`isPacified`), and not if nothing matches.
class Pacified extends Rule_1.default {
}
exports.Pacified = Pacified;
exports.default = Pacified;
//# sourceMappingURL=Pacified.js.map