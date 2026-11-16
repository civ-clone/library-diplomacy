import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
export declare class JoinWar extends Proposal {
  private _against;
  constructor(
    against: Player,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  against(): Player;
}
export default JoinWar;
