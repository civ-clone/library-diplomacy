import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// Whether `player` is pacified towards `other`: it isn't hostile to `other` when they negotiate (it makes no demands
//  of it and doesn't turn down its peace), and doesn't break a peace with it. A player is pacified if any match is
//  true (`isPacified`), and not if nothing matches.
export class Pacified extends Rule<[Player, Player], boolean> {}

export default Pacified;
