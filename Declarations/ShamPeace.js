"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShamPeace = void 0;
const Declaration_1 = require("@civ-clone/core-diplomacy/Declaration");
// `holder` keeps its peace with `against` only because it can't win a war yet: the treaty stands, but `holder` may
//  drop it without a word when it chooses. It points one way, like `Vendetta`.
class ShamPeace extends Declaration_1.default {
    holder() {
        return this.players()[0];
    }
    against() {
        return this.players()[1];
    }
}
exports.ShamPeace = ShamPeace;
exports.default = ShamPeace;
//# sourceMappingURL=ShamPeace.js.map