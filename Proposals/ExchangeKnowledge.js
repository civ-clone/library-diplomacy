"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeKnowledge = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
class ExchangeKnowledge extends Proposal_1.default {
    constructor(advances, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._advances = advances;
        this.addKey('advances');
    }
    advances() {
        return this._advances;
    }
}
exports.ExchangeKnowledge = ExchangeKnowledge;
exports.default = ExchangeKnowledge;
//# sourceMappingURL=ExchangeKnowledge.js.map