import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'

})
export class AppComponent implements OnInit {
    pokemonList : Pokemon[] = POKEMONS;
    pokemonSelected : Pokemon|undefined ;

    ngOnInt() {
      console.table(this.pokemonList);
      
  }
  
  selectPokemon(pokemonId : string|Pokemon){

    const pokemon :Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log( `vous avez demander le pokemon ${pokemon.name} `);
    }else {
      console.log( `vous avez demander un pokemon qui nexiste pas `);
      this.pokemonSelected = pokemon;
    }
    
    
  } 
}
