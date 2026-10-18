import {
  InteractionRegistry,
  instance as interactionRegistryInstance,
} from '@civ-clone/core-diplomacy/InteractionRegistry';
import Declaration from '@civ-clone/core-diplomacy/Declaration';
import Player from '@civ-clone/core-player/Player';
import ShamPeace from '../Declarations/ShamPeace';
import Vendetta from '../Declarations/Vendetta';

type Held = typeof Vendetta | typeof ShamPeace;

// The active `DeclarationType` that `holder` holds against `against`, if any: these point one way, so the order of
//  the players matters.
export const heldBy = (
  DeclarationType: Held,
  holder: Player,
  against: Player,
  interactionRegistry: InteractionRegistry = interactionRegistryInstance
): Vendetta | ShamPeace | null =>
  (interactionRegistry
    .getByPlayers(holder, against)
    .find(
      (interaction) =>
        interaction instanceof DeclarationType &&
        (interaction as Declaration).active() &&
        interaction.players()[0] === holder
    ) as Vendetta | ShamPeace | undefined) ?? null;

// Whether `holder` holds a grudge against `against`.
export const hasVendetta = (
  holder: Player,
  against: Player,
  interactionRegistry: InteractionRegistry = interactionRegistryInstance
): boolean => heldBy(Vendetta, holder, against, interactionRegistry) !== null;

export default hasVendetta;
