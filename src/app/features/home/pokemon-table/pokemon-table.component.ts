import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {
  @Input() pokemons:Pokemon[] = [];
  constructor() { }

  ngOnInit() {
  }
}
