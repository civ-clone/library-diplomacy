"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MayNegotiate = void 0;
const Rule_1 = require("@civ-clone/core-rule/Rule");
// Whether `player` may open a negotiation with `other` now: a ruleset's say on how often players talk. Every match
//  must be true (`mayNegotiate`); with none, `mayNegotiate` falls back to a gap of 15 turns since they last talked.
class MayNegotiate extends Rule_1.default {
}
exports.MayNegotiate = MayNegotiate;
exports.default = MayNegotiate;
//# sourceMappingURL=MayNegotiate.js.map