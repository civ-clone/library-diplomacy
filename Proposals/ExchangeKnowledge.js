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
var _ExchangeKnowledge_advances;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeKnowledge = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Proposal_1 = require("@civ-clone/core-diplomacy/Negotiation/Proposal");
class ExchangeKnowledge extends Proposal_1.default {
    constructor(advances, by, negotiation, ruleRegistry = RuleRegistry_1.instance) {
        super(by, negotiation, ruleRegistry);
        _ExchangeKnowledge_advances.set(this, void 0);
        __classPrivateFieldSet(this, _ExchangeKnowledge_advances, advances, "f");
        this.addKey('advances');
    }
    advances() {
        return __classPrivateFieldGet(this, _ExchangeKnowledge_advances, "f");
    }
}
exports.ExchangeKnowledge = ExchangeKnowledge;
_ExchangeKnowledge_advances = new WeakMap();
exports.default = ExchangeKnowledge;
//# sourceMappingURL=ExchangeKnowledge.js.map