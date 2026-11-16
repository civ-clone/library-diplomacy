"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellAdvance = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
// An offer to sell the other player an advance (`advance()`) for gold (`price()`).
class SellAdvance extends Proposal_1.default {
    constructor(advance, price, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._advance = advance;
        this._price = price;
        this.addKey('advance', 'price');
    }
    advance() {
        return this._advance;
    }
    price() {
        return this._price;
    }
}
exports.SellAdvance = SellAdvance;
exports.default = SellAdvance;
//# sourceMappingURL=SellAdvance.js.map