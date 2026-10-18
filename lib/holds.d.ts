import { InteractionRegistry } from '@civ-clone/core-diplomacy/InteractionRegistry';
import Player from '@civ-clone/core-player/Player';
import ShamPeace from '../Declarations/ShamPeace';
import Vendetta from '../Declarations/Vendetta';
type Held = typeof Vendetta | typeof ShamPeace;
export declare const heldBy: (
  DeclarationType: Held,
  holder: Player,
  against: Player,
  interactionRegistry?: InteractionRegistry
) => Vendetta | ShamPeace | null;
export declare const hasVendetta: (
  holder: Player,
  against: Player,
  interactionRegistry?: InteractionRegistry
) => boolean;
export default hasVendetta;
