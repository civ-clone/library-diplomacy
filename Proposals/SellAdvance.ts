import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';

// An offer to sell the other player an advance (`advance()`) for gold (`price()`).
export class SellAdvance extends Proposal {
  private _advance: Advance;
  private _price: Gold;

  constructor(
    advance: Advance,
    price: Gold,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this._advance = advance;
    this._price = price;

    this.addKey('advance', 'price');
  }

  advance(): Advance {
    return this._advance;
  }

  price(): Gold {
    return this._price;
  }
}

export default SellAdvance;
