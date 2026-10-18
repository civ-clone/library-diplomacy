import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
export declare class CancelTreaty extends Proposal {
  private _with;
  constructor(
    withPlayer: Player,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  with(): Player;
}
export default CancelTreaty;
