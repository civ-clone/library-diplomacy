import {
  AskAlly,
  CancelAlliance,
  DemandWithdrawal,
  Gift,
  JoinWar,
  OfferCeasefire,
  ProposeAlliance,
  SellAdvance,
  ShareMaps,
} from '../Proposals';
import { Alliance, Ceasefire, Peace } from '../Declarations';
import Advance from '@civ-clone/core-science/Advance';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Player from '@civ-clone/core-player/Player';
import Proposal from '@civ-clone/core-diplomacy/Negotiation/Proposal';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Unit from '@civ-clone/core-unit/Unit';
import { expect } from 'chai';

class Writing extends Advance {}

// An advance is named by its class, as the meeting steps name one.
const writing = Writing as unknown as Advance;

const setUp = () => {
  const ruleRegistry = new RuleRegistry(),
    a = new Player(ruleRegistry),
    b = new Player(ruleRegistry),
    c = new Player(ruleRegistry),
    negotiation = new Negotiation(a, b, ruleRegistry);

  return { a, b, c, negotiation, ruleRegistry };
};

describe('Proposals', (): void => {
  (
    [
      ['OfferCeasefire', OfferCeasefire],
      ['ProposeAlliance', ProposeAlliance],
      ['CancelAlliance', CancelAlliance],
      ['AskAlly', AskAlly],
      ['DemandWithdrawal', DemandWithdrawal],
      ['ShareMaps', ShareMaps],
    ] as [string, typeof Proposal][]
  ).forEach(([name, ProposalType]): void => {
    it(`${name} is a proposal by one player to the other`, (): void => {
      const { a, b, negotiation, ruleRegistry } = setUp(),
        proposal = new ProposalType(a, negotiation, ruleRegistry);

      expect(proposal).instanceof(Proposal);
      expect(proposal.by()).equal(a);
      expect(proposal.for()).to.deep.equal([b]);
      expect(proposal.negotiation()).equal(negotiation);
      expect(proposal.resolved()).false;
    });
  });

  it('JoinWar names the third player', (): void => {
    const { a, b, c, negotiation, ruleRegistry } = setUp(),
      proposal = new JoinWar(c, a, negotiation, ruleRegistry);

    expect(proposal.against()).equal(c);
    expect(proposal.by()).equal(a);
    expect(proposal.for()).to.deep.equal([b]);
    expect(proposal.keys()).include('against');
  });

  it('Gift carries gold, an advance or a unit', (): void => {
    const { a, b, negotiation, ruleRegistry } = setUp(),
      gold = new Gold(150),
      unit: Unit = Object.create(Unit.prototype),
      ofGold = new Gift(gold, a, negotiation, ruleRegistry),
      ofAdvance = new Gift(writing, a, negotiation, ruleRegistry),
      ofUnit = new Gift(unit, b, negotiation, ruleRegistry);

    expect(ofGold.gift()).equal(gold);
    expect(ofGold.kind()).equal('gold');
    expect(ofAdvance.gift()).equal(writing);
    expect(ofAdvance.kind()).equal('advance');
    expect(ofUnit.gift()).equal(unit);
    expect(ofUnit.kind()).equal('unit');
    expect(ofUnit.for()).to.deep.equal([a]);
    expect(ofGold.keys()).include.members(['gift', 'kind']);
  });

  it('SellAdvance carries the advance and its price', (): void => {
    const { a, negotiation, ruleRegistry } = setUp(),
      price = new Gold(400),
      proposal = new SellAdvance(writing, price, a, negotiation, ruleRegistry);

    expect(proposal.advance()).equal(writing);
    expect(proposal.price()).equal(price);
    expect(proposal.price().value()).equal(400);
    expect(proposal.keys()).include.members(['advance', 'price']);
  });
});

describe('Declarations', (): void => {
  it('re-exports Ceasefire and Alliance, and an alliance is a peace', (): void => {
    const { a, b, ruleRegistry } = setUp(),
      alliance = new Alliance(a, b, ruleRegistry),
      ceasefire = new Ceasefire(a, b, ruleRegistry);

    expect(alliance).instanceof(Peace);
    expect(ceasefire).not.instanceof(Peace);
    expect(alliance.active()).true;
    expect(ceasefire.active()).true;
  });
});
