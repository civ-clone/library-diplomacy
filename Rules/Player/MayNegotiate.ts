import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// Whether `player` may open a negotiation with `other` now: a ruleset's say on how often players talk. Every match
//  must be true (`mayNegotiate`); with none, `mayNegotiate` falls back to a gap of 15 turns since they last talked.
export class MayNegotiate extends Rule<[Player, Player], boolean> {}

export default MayNegotiate;
