// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
// import Link from '../_modules/link/link';
//
// $(() => {
//   new Link(); // Activate Link modules logic
//   console.log('Welcome to Yeogurt!');
// });

var $ = require("../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js");
window.jQuery = $;

require('../../node_modules/foundation-sites/dist/foundation.min.js');

$(document).foundation();
