import Declaration from '@civ-clone/core-diplomacy/Declaration';
import Player from '@civ-clone/core-player/Player';

// `holder` keeps its peace with `against` only because it can't win a war yet: the treaty stands, but `holder` may
//  drop it without a word when it chooses. It points one way, like `Vendetta`.
export class ShamPeace extends Declaration {
  holder(): Player {
    return this.players()[0];
  }

  against(): Player {
    return this.players()[1];
  }
}

export default ShamPeace;
