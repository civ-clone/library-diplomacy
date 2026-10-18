import Declaration from '@civ-clone/core-diplomacy/Declaration';
import Player from '@civ-clone/core-player/Player';

// A grudge: `holder` won't forget what `against` did (a sneak attack, a nuclear strike, being talked out of a treaty).
//  It points one way: the first player holds it against the second. In Civ1 it doubles the tribute demanded and makes
//  peace harder to agree.
export class Vendetta extends Declaration {
  holder(): Player {
    return this.players()[0];
  }

  against(): Player {
    return this.players()[1];
  }
}

export default Vendetta;
