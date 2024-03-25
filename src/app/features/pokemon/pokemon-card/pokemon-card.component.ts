import { Component, Input, OnChanges, OnInit, } from '@angular/core';
import { Pokemon } from '../../../core/models/pokemon.model';
import { typeColors } from '../../../styles/colors';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnChanges {
  @Input() pokemon!:Pokemon;

  primaryColor:string = '';

  constructor() { }

  ngOnInit() {
    this.primaryColor = this.pokemon.types[0].type.name;
  }

  ngOnChanges() {
    this.primaryColor = this.pokemon.types[0].type.name;
  }
}
