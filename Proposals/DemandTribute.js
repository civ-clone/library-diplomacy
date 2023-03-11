"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DemandTribute_tribute;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandTribute = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
class DemandTribute extends Proposal_1.default {
    constructor(tribute, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        _DemandTribute_tribute.set(this, void 0);
        __classPrivateFieldSet(this, _DemandTribute_tribute, tribute, "f");
        this.addKey('tribute');
    }
    tribute() {
        return __classPrivateFieldGet(this, _DemandTribute_tribute, "f");
    }
}
exports.DemandTribute = DemandTribute;
_DemandTribute_tribute = new WeakMap();
exports.default = DemandTribute;
//# sourceMappingURL=DemandTribute.js.map