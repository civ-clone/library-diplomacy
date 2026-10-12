import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Pacified from '../Rules/Player/Pacified';
import Player from '@civ-clone/core-player/Player';

// Whether `player` is pacified towards `other` (`Pacified`).
export const isPacified = (
  player: Player,
  other: Player,
  ruleRegistry: RuleRegistry = ruleRegistryInstance
): boolean =>
  ruleRegistry
    .process(Pacified, player, other)
    .some((pacified: boolean): boolean => pacified);

export default isPacified;
