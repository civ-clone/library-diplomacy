"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelTreaty = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
// A call to end a peace treaty with a third player (`with()`), the proposer's enemy.
class CancelTreaty extends Proposal_1.default {
    constructor(withPlayer, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._with = withPlayer;
        this.addKey('with');
    }
    with() {
        return this._with;
    }
}
exports.CancelTreaty = CancelTreaty;
exports.default = CancelTreaty;
//# sourceMappingURL=CancelTreaty.js.map