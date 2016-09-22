'use strict';

import $ from '../../../node_modules/jquery';

export default class Vignette {
  constructor() {
    this.name = 'Vignette';
    console.log('%s module', this.name);
    this.animate();
  }

  animate(){
    $( ".vignette" ).click(function() {
      $( ".vignette img" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });
    });
  }
}

