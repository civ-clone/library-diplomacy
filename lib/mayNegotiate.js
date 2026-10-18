"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mayNegotiate = exports.lastNegotiated = exports.DEFAULT_TURNS_BETWEEN_NEGOTIATIONS = void 0;
const InteractionRegistry_1 = require("@civ-clone/core-diplomacy/InteractionRegistry");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Turn_1 = require("@civ-clone/core-turn-based-game/Turn");
const MayNegotiate_1 = require("../Rules/Player/MayNegotiate");
const Negotiation_1 = require("@civ-clone/core-diplomacy/Negotiation");
exports.DEFAULT_TURNS_BETWEEN_NEGOTIATIONS = 15;
// The turn `player` and `other` last negotiated, or `null` if they never have.
const lastNegotiated = (player, other, interactionRegistry = InteractionRegistry_1.instance) => interactionRegistry
    .getByPlayers(player, other)
    .filter((interaction) => interaction instanceof Negotiation_1.default)
    .reduce((latest, interaction) => latest === null || interaction.when() > latest
    ? interaction.when()
    : latest, null);
exports.lastNegotiated = lastNegotiated;
// Whether `player` may open a negotiation with `other` now (`MayNegotiate`).
const mayNegotiate = (player, other, ruleRegistry = RuleRegistry_1.instance, interactionRegistry = InteractionRegistry_1.instance, turn = Turn_1.instance) => {
    const answers = ruleRegistry.process(MayNegotiate_1.default, player, other);
    if (answers.length > 0) {
        return answers.every((answer) => answer);
    }
    const last = (0, exports.lastNegotiated)(player, other, interactionRegistry);
    return (last === null || turn.value() - last > exports.DEFAULT_TURNS_BETWEEN_NEGOTIATIONS);
};
exports.mayNegotiate = mayNegotiate;
exports.default = exports.mayNegotiate;
//# sourceMappingURL=mayNegotiate.js.map