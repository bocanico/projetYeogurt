'use strict';

import Vignette from '../vignette';

describe('Vignette View', function() {

  beforeEach(() => {
    this.vignette = new Vignette();
  });

  it('Should run a few assertions', () => {
    expect(this.vignette).toBeDefined();
  });

});
