import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
import Unit from '@civ-clone/core-unit/Unit';
export declare class Gift extends Proposal {
  private _gift;
  constructor(
    gift: Advance | Gold | Unit,
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  gift(): Advance | Gold | Unit;
  kind(): string;
}
export default Gift;
