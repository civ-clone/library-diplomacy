"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandTribute = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
class DemandTribute extends Proposal_1.default {
    constructor(tribute, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._tribute = tribute;
        this.addKey('tribute');
    }
    tribute() {
        return this._tribute;
    }
}
exports.DemandTribute = DemandTribute;
exports.default = DemandTribute;
//# sourceMappingURL=DemandTribute.js.map