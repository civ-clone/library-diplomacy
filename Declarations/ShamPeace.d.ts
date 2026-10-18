import Declaration from '@civ-clone/core-diplomacy/Declaration';
import Player from '@civ-clone/core-player/Player';
export declare class ShamPeace extends Declaration {
  holder(): Player;
  against(): Player;
}
export default ShamPeace;
