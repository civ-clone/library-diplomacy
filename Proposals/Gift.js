"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Gold_1 = require("@civ-clone/base-city-yield-gold/Gold");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
// A gift from the proposer to the other player: gold, an advance or a unit, handed over if it's accepted.
class Gift extends Proposal_1.default {
    constructor(gift, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._gift = gift;
        this.addKey('gift', 'kind');
    }
    gift() {
        return this._gift;
    }
    // What is given, 'gold', 'unit' or 'advance', for the wording.
    kind() {
        if (this._gift instanceof Gold_1.default) {
            return 'gold';
        }
        // Anything with a `player()` is a unit, so a unit from another copy of core-unit still counts.
        if (typeof this._gift.player === 'function') {
            return 'unit';
        }
        return 'advance';
    }
}
exports.Gift = Gift;
exports.default = Gift;
//# sourceMappingURL=Gift.js.map