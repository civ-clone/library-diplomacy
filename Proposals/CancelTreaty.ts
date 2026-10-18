import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';

// A call to end a peace treaty with a third player (`with()`), the proposer's enemy.
export class CancelTreaty extends Proposal {
  private _with: Player;

  constructor(
    withPlayer: Player,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this._with = withPlayer;

    this.addKey('with');
  }

  with(): Player {
    return this._with;
  }
}

export default CancelTreaty;
