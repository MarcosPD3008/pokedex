import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';
import { map, mergeMap, from, toArray } from 'rxjs';
@Injectable({providedIn: 'root'})
export class PokemonService {
    baseUrl:string;
    constructor(private http:HttpClient) {
        this.baseUrl = `${environment.baseUrl}pokemon/`;
    }

  getPokemons(pageNumber:number = 1, pageSize:number = 12) {
    const limit = pageSize;const offset = (pageNumber - 1) * pageSize;
    let params = new HttpParams().set('limit', limit.toString())
                                  .set('offset', offset.toString());
    return this.http.get<PokemonResponse>(this.baseUrl, { params })
      .pipe(
          mergeMap(initialResponse => {
            return from(initialResponse.results).pipe(
              mergeMap(pokemon => this.http.get(pokemon.url)),
              toArray(),
              map(details => ({
                count: initialResponse.count,
                next: initialResponse.next,
                previous: initialResponse.previous,
                results: details as Pokemon[]
              }))
            );
          })
      );
    
    }
  
    getPokemonDetails(name:string) {
        return this.http.get(`${this.baseUrl}${name}`);
    }
}