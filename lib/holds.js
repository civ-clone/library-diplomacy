"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasVendetta = exports.heldBy = void 0;
const InteractionRegistry_1 = require("@civ-clone/core-diplomacy/InteractionRegistry");
const Vendetta_1 = require("../Declarations/Vendetta");
// The active `DeclarationType` that `holder` holds against `against`, if any: these point one way, so the order of
//  the players matters.
const heldBy = (DeclarationType, holder, against, interactionRegistry = InteractionRegistry_1.instance) => {
    var _a;
    return (_a = interactionRegistry
        .getByPlayers(holder, against)
        .find((interaction) => interaction instanceof DeclarationType &&
        interaction.active() &&
        interaction.players()[0] === holder)) !== null && _a !== void 0 ? _a : null;
};
exports.heldBy = heldBy;
// Whether `holder` holds a grudge against `against`.
const hasVendetta = (holder, against, interactionRegistry = InteractionRegistry_1.instance) => (0, exports.heldBy)(Vendetta_1.default, holder, against, interactionRegistry) !== null;
exports.hasVendetta = hasVendetta;
exports.default = exports.hasVendetta;
//# sourceMappingURL=holds.js.map