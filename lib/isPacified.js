"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPacified = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Pacified_1 = require("../Rules/Player/Pacified");
// Whether `player` is pacified towards `other` (`Pacified`).
const isPacified = (player, other, ruleRegistry = RuleRegistry_1.instance) => ruleRegistry
    .process(Pacified_1.default, player, other)
    .some((pacified) => pacified);
exports.isPacified = isPacified;
exports.default = exports.isPacified;
//# sourceMappingURL=isPacified.js.map