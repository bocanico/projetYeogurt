// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from '../../node_modules/jquery';
import Link from '../_modules/link/link';
import Vignette from '../_modules/vignette/vignette';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
  new Vignette();
});

window.jQuery = $;// foundation ne reconnait pas $ nativement

require('../../node_modules/foundation-sites/dist/foundation.min.js');

$(document).foundation();
