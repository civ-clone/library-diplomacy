import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import OfferPeace from './OfferPeace';
import Player from '@civ-clone/core-player/Player';
export declare class OfferPeaceWithGift extends OfferPeace {
  private _gifts;
  private _kind;
  constructor(
    kind: string,
    gifts: (Advance | Gold)[],
    by: Player,
    negotiation: Negotiation,
    ruleRegistry?: RuleRegistry
  );
  kind(): string;
  gifts(): (Advance | Gold)[];
}
export default OfferPeaceWithGift;
