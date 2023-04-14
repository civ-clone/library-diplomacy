import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
export declare class ExchangeKnowledge extends Proposal {
  #private;
  constructor(
    advances: Advance[],
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  advances(): Advance[];
}
export default ExchangeKnowledge;
