import { InteractionRegistry } from '@civ-clone/core-diplomacy/InteractionRegistry';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { Turn } from '@civ-clone/core-turn-based-game/Turn';
import Player from '@civ-clone/core-player/Player';
export declare const DEFAULT_TURNS_BETWEEN_NEGOTIATIONS = 15;
export declare const lastNegotiated: (
  player: Player,
  other: Player,
  interactionRegistry?: InteractionRegistry
) => number | null;
export declare const mayNegotiate: (
  player: Player,
  other: Player,
  ruleRegistry?: RuleRegistry,
  interactionRegistry?: InteractionRegistry,
  turn?: Turn
) => boolean;
export default mayNegotiate;
