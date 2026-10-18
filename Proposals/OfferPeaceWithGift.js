"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferPeaceWithGift = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const OfferPeace_1 = require("./OfferPeace");
// A peace offer sweetened with gifts: the proposer hands them over if the offer is accepted. `kind` says which of a
//  ruleset's sweeteners it is (Civ1's are 'advance', 'gold' and 'everything'), for the wording and so each is offered
//  once.
class OfferPeaceWithGift extends OfferPeace_1.default {
    constructor(kind, gifts, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        this._gifts = gifts;
        this._kind = kind;
        this.addKey('gifts', 'kind');
    }
    kind() {
        return this._kind;
    }
    gifts() {
        return this._gifts;
    }
}
exports.OfferPeaceWithGift = OfferPeaceWithGift;
exports.default = OfferPeaceWithGift;
//# sourceMappingURL=OfferPeaceWithGift.js.map