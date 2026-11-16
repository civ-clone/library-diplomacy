import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
import Unit from '@civ-clone/core-unit/Unit';

// A gift from the proposer to the other player: gold, an advance or a unit, handed over if it's accepted.
export class Gift extends Proposal {
  private _gift: Advance | Gold | Unit;

  constructor(
    gift: Advance | Gold | Unit,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(by, negotiation, ruleRegistry);

    this._gift = gift;

    this.addKey('gift', 'kind');
  }

  gift(): Advance | Gold | Unit {
    return this._gift;
  }

  // What is given, 'gold', 'unit' or 'advance', for the wording.
  kind(): string {
    if (this._gift instanceof Gold) {
      return 'gold';
    }

    // Anything with a `player()` is a unit, so a unit from another copy of core-unit still counts.
    if (typeof (this._gift as Unit).player === 'function') {
      return 'unit';
    }

    return 'advance';
  }
}

export default Gift;
