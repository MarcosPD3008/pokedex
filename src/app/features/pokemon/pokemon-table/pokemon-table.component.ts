import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent {
  @Input() pokemons:Pokemon[] = [];
  @Output() viewDetails: EventEmitter<Pokemon> = new EventEmitter();

  viewPokemonDetails(pokemon: Pokemon) {
    this.viewDetails.emit(pokemon);
  }
}
