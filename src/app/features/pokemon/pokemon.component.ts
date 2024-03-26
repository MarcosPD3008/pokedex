import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { Pokemon, PokemonResponse } from '../../core/models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { paginationChangeEvent } from '../../shared/components/pagination/pagination.component';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemonResponse!:PokemonResponse;
  selectedPokemon?:Pokemon;
  seeAsTable:boolean = false;
  showAll:boolean = true;
  loading:boolean = false;
  seeFaviorites:boolean = true;
  isMobile:boolean = false;

  pagination: paginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 16
  }

  constructor(private pokemonService:PokemonService,
              private sidebarService: SidebarService) { }

  ngOnInit() {
    this.searchPokemon();
    this.sidebarService.mobile$.subscribe({
      next: (isMobile) => {
        this.isMobile = isMobile;
      }
    })
  }

  getPokemons() {
    const { currentPage, pageSize } = this.pagination;

    this.loading = true;
    this.pokemonService.getPokemons(currentPage, pageSize)
    .subscribe({
      next: (response) => {
        this.pokemonResponse = response;
        this.pokemonResponse.results.sort((a, b) => a.id - b.id);
        this.pagination.total = response.count;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getFavoritePokemons() {
    this.loading = true;
    this.pokemonService.getFavorites()
    .subscribe({
      next: (pokemons) => {
        this.pokemonResponse = {
          count: pokemons.length,
          next: null,
          previous: null,
          results: pokemons.sort((a, b) => a.id - b.id)
        }

        
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  searchPokemon(){
    this.seeFaviorites = !this.seeFaviorites;

    if(this.seeFaviorites) {
      this.getFavoritePokemons();
    }
    else {
      this.getPokemons();
    }
  }

  onPaginationChange(event: paginationChangeEvent) {
    this.pagination = event;
    this.getPokemons();
  }

  selectPokemon(pokemon:Pokemon) {
    this.selectedPokemon = pokemon;
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
