import { Alliance, Ceasefire, Peace } from '../Declarations';
import Advance from '@civ-clone/core-science/Advance';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Expiry from '@civ-clone/core-diplomacy/Expiry';
import { Game } from '@civ-clone/core-game/Game';
import Gift from '../Proposals/Gift';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Negotiation from '@civ-clone/core-diplomacy/Negotiation';
import Never from '@civ-clone/core-diplomacy/Expiries/Never';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
import { expect } from 'chai';
import { gameForLoad } from '@civ-clone/core-save-game/gameForLoad';
import { hydrate } from '@civ-clone/core-save-game/hydrate';
import { registerClasses } from '@civ-clone/core-save-game/registerClasses';
import { save } from '@civ-clone/core-save-game/save';

class Greek extends Civilization {}
class English extends Civilization {}
class Writing extends Advance {}
class Warrior extends Unit {}

// The classes a game that uses these registers for loading (core-save-game names only core-diplomacy's).
const saveable = [Alliance, Ceasefire, Peace, Gift, Gold, Writing, Warrior];

describe('in a saved game', (): void => {
  const setUp = () => {
    const game = new Game(),
      a = new Player(game.rules),
      b = new Player(game.rules),
      c = new Player(game.rules);

    game.engine.registerPlugins({ '@civ-clone/library-diplomacy': 'test' });
    registerClasses(game);
    a.setCivilization(new Greek());
    b.setCivilization(new English());
    c.setCivilization(new English());
    game.classes.register(Greek, English, ...saveable);
    game.players.register(a, b, c);

    return { game, a, b, c };
  };

  const reload = (game: Game): Game => {
    const loaded = gameForLoad({
      classes: game.classes,
      engine: game.engine,
      rules: game.rules,
    });

    hydrate(save(game, { name: 'test', createdAt: 0 }), loaded);

    return loaded;
  };

  it('keeps an alliance beside its peace, and an expired ceasefire expired', (): void => {
    const { game, a, b, c } = setUp(),
      peace = new Peace(a, b, new Never(), game.rules),
      alliance = new Alliance(a, b, new Never(), game.rules),
      ceasefire = new Ceasefire(a, c, new Never(), game.rules);

    ceasefire.expire(a);
    game.interactions.register(peace, alliance, ceasefire);

    const loaded = reload(game),
      [loadedA, loadedB, loadedC] = loaded.players.entries(),
      between = loaded.interactions.getByPlayers(loadedA, loadedB),
      truce = loaded.interactions.getByPlayers(loadedA, loadedC);

    expect(between.map((interaction) => interaction.constructor)).to.deep.equal(
      [Peace, Alliance]
    );
    expect(between[1]).instanceof(Peace);
    expect((between as Peace[]).every((declaration) => declaration.active()))
      .true;
    expect(truce).length(1);
    expect(truce[0]).instanceof(Ceasefire);
    expect((truce[0] as Ceasefire).expired()).true;
    expect((truce[0] as Ceasefire).expiry()).instanceof(Expiry);
  });

  it('keeps what a gift carries: gold, an advance or a unit', (): void => {
    const { game, a, b } = setUp(),
      negotiation = new Negotiation(a, b, game.rules),
      unit = new Warrior(null, a, null as unknown as Tile, game.rules),
      gifts = [
        new Gift(new Gold(150), a, negotiation, game.rules),
        new Gift(Writing as unknown as Advance, a, negotiation, game.rules),
        new Gift(unit, a, negotiation, game.rules),
      ];

    gifts.forEach((gift) => negotiation.proceed(gift));
    game.units.register(unit);
    game.interactions.register(negotiation);

    const loaded = reload(game),
      [loadedNegotiation] = loaded.interactions
        .entries()
        .filter(
          (interaction): interaction is Negotiation =>
            interaction instanceof Negotiation
        ),
      loadedGifts = loadedNegotiation.interactions() as Gift[],
      [loadedUnit] = loaded.units.entries();

    expect(loadedGifts.map((gift) => gift.kind())).to.deep.equal([
      'gold',
      'advance',
      'unit',
    ]);
    expect((loadedGifts[0].gift() as Gold).value()).equal(150);
    expect(loadedGifts[1].gift()).equal(Writing);
    expect(loadedGifts[2].gift()).equal(loadedUnit);
    expect(loadedUnit).instanceof(Warrior);
    expect(loadedGifts[2].by()).equal(loaded.players.entries()[0]);
  });
});
