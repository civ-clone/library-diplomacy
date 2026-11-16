"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinWar = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
// A call to the other player to declare war on a third (`against()`).
class JoinWar extends Proposal_1.default {
    constructor(against, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._against = against;
        this.addKey('against');
    }
    against() {
        return this._against;
    }
}
exports.JoinWar = JoinWar;
exports.default = JoinWar;
//# sourceMappingURL=JoinWar.js.map