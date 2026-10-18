"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendetta = void 0;
const Declaration_1 = require("@civ-clone/core-diplomacy/Declaration");
// A grudge: `holder` won't forget what `against` did (a sneak attack, a nuclear strike, being talked out of a treaty).
//  It points one way: the first player holds it against the second. In Civ1 it doubles the tribute demanded and makes
//  peace harder to agree.
class Vendetta extends Declaration_1.default {
    holder() {
        return this.players()[0];
    }
    against() {
        return this.players()[1];
    }
}
exports.Vendetta = Vendetta;
exports.default = Vendetta;
//# sourceMappingURL=Vendetta.js.map