import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
export declare class SellAdvance extends Proposal {
  private _advance;
  private _price;
  constructor(
    advance: Advance,
    price: Gold,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  advance(): Advance;
  price(): Gold;
}
export default SellAdvance;
