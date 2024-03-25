import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../../core/models/pokemon.model';
import { FavoriteService } from '../../../core/services/favorite.service';
import { Entities } from '../../../core/enums/entity';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnChanges {

  @Input() pokemon!: Pokemon;
  @Output() close: EventEmitter<void> = new EventEmitter();
  primaryTypeColor: string = '';
  isFavoritePokemon: boolean = false;
  constructor(private favoriteService:FavoriteService) { }

  ngOnInit() {
    const backdrop = document.querySelector('.backdrop');
    const content = document.querySelector('.details-card');
    
    backdrop?.addEventListener('click', () => {
      this.onClose();
    });
    
    content?.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      this.primaryTypeColor = this.pokemon.types[0].type.name;
      this.isFavorite()
    }
  
  }

  getPercentage(baseStat: number) {
    return `${(baseStat * 100) / 255}%`;
  }

  onClose() {
    this.close.emit();
  }

  isFavorite() {
    this.favoriteService.isFavorite(this.pokemon.id, Entities.Pokemon)
    .subscribe({
      next: (isFavorite) => {
        this.isFavoritePokemon = isFavorite;
      }
    })
  }

  setAsFavorite() {
    if (this.isFavoritePokemon) {
      this.favoriteService.removeFavorite(this.pokemon.id, Entities.Pokemon)
      .subscribe({
        next: () => {
          this.isFavoritePokemon = false;
        }
      })
    }
    else {
      this.favoriteService.addFavorite({id: this.pokemon.id, type: Entities.Pokemon})
      .subscribe({
        next: () => {
          this.isFavoritePokemon = true;
        }
      })
    }
  }
}

