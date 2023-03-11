import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';

export class DemandTribute extends Proposal {
  #tribute: Advance | Gold;

  constructor(
    tribute: Advance | Gold,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this.#tribute = tribute;

    this.addKey('tribute');
  }

  tribute(): Advance | Gold {
    return this.#tribute;
  }
}

export default DemandTribute;
