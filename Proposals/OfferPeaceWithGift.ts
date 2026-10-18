import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import OfferPeace from './OfferPeace';
import Player from '@civ-clone/core-player/Player';

// A peace offer sweetened with gifts: the proposer hands them over if the offer is accepted. `kind` says which of a
//  ruleset's sweeteners it is (Civ1's are 'advance', 'gold' and 'everything'), for the wording and so each is offered
//  once.
export class OfferPeaceWithGift extends OfferPeace {
  private _gifts: (Advance | Gold)[];
  private _kind: string;

  constructor(
    kind: string,
    gifts: (Advance | Gold)[],
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this._gifts = gifts;
    this._kind = kind;

    this.addKey('gifts', 'kind');
  }

  kind(): string {
    return this._kind;
  }

  gifts(): (Advance | Gold)[] {
    return this._gifts;
  }
}

export default OfferPeaceWithGift;
