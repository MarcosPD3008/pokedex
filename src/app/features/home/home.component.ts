import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { PokemonResponse } from '../../core/models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { paginationChangeEvent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonResponse!:PokemonResponse
  seeAsTable:boolean = false;
  showAll:boolean = true;
  loading:boolean = false;

  pagination: paginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 16
  }

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getPokemons();
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
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onPaginationChange(event: paginationChangeEvent) {
    this.pagination = event;
    this.getPokemons();
  }
}
