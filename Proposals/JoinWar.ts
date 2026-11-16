import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';

// A call to the other player to declare war on a third (`against()`).
export class JoinWar extends Proposal {
  private _against: Player;

  constructor(
    against: Player,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this._against = against;

    this.addKey('against');
  }

  against(): Player {
    return this._against;
  }
}

export default JoinWar;
