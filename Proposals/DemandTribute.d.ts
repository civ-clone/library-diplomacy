import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
export declare class DemandTribute extends Proposal {
  #private;
  constructor(
    tribute: Advance | Gold,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  tribute(): Advance | Gold;
}
export default DemandTribute;
