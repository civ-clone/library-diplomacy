import {
  InteractionRegistry,
  instance as interactionRegistryInstance,
} from '@civ-clone/core-diplomacy/InteractionRegistry';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import {
  Turn,
  instance as turnInstance,
} from '@civ-clone/core-turn-based-game/Turn';
import MayNegotiate from '../Rules/Player/MayNegotiate';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';

export const DEFAULT_TURNS_BETWEEN_NEGOTIATIONS = 15;

// The turn `player` and `other` last negotiated, or `null` if they never have.
export const lastNegotiated = (
  player: Player,
  other: Player,
  interactionRegistry: InteractionRegistry = interactionRegistryInstance
): number | null =>
  interactionRegistry
    .getByPlayers(player, other)
    .filter((interaction) => interaction instanceof Negotiation)
    .reduce(
      (latest: number | null, interaction) =>
        latest === null || interaction.when() > latest
          ? interaction.when()
          : latest,
      null
    );

// Whether `player` may open a negotiation with `other` now (`MayNegotiate`).
export const mayNegotiate = (
  player: Player,
  other: Player,
  ruleRegistry: RuleRegistry = ruleRegistryInstance,
  interactionRegistry: InteractionRegistry = interactionRegistryInstance,
  turn: Turn = turnInstance
): boolean => {
  const answers = ruleRegistry.process(MayNegotiate, player, other);

  if (answers.length > 0) {
    return answers.every((answer: boolean) => answer);
  }

  const last = lastNegotiated(player, other, interactionRegistry);

  return (
    last === null || turn.value() - last > DEFAULT_TURNS_BETWEEN_NEGOTIATIONS
  );
};

export default mayNegotiate;
