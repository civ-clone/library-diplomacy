import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';

export class ExchangeKnowledge extends Proposal {
  #advances: Advance[];

  constructor(
    advances: Advance[],
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this.#advances = advances;

    this.addKey('advances');
  }

  advances(): Advance[] {
    return this.#advances;
  }
}

export default ExchangeKnowledge;
