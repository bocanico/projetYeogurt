'use strict';

import PokemonByName from '../pokemonbyname';

describe('PokemonByName View', function() {

  beforeEach(() => {
    this.PokemonByName = new PokemonByName();
  });

  it('Should run a few assertions', () => {
    expect(this.PokemonByName).toBeDefined();
  });

});
