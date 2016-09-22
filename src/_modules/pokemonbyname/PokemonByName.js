'use strict';

import $ from '../../../node_modules/jquery'

export default class Pokemonbyname {

  constructor() {
    this.getpokemon();
  }


  getpokemon() {
    // $.get( "test.php", function( data ) {
    //   $( "body" )
    //       .append( "Name: " + data.name ) // John
    //       .append( "Time: " + data.time ); //  2pm
    // }, "json" );
    var index = Math.floor((Math.random() * 100) + 1);

    $.get( "http://pokeapi.co/api/v2/pokemon/"+index, function( data ) {
      return new Pokemon(data.name);
    });
  }
}

class Pokemon {
  constructor(name) {
    this.name = name;
    console.log('pokemon name: %s', this.name);
  }

}




