import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, shareReplay, toArray } from 'rxjs';
import { environment } from '../../../environment/environment';
import { AbilityEffect, AbilityEffectResponse } from '../models/abilities.models';
@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  baseUrl:string;
  constructor(private http:HttpClient) {
    this.baseUrl = `${environment.baseUrl}ability`;
  }    

  getAbilities(pageNumber:number = 1, pageSize:number = 12) {
      const limit = pageSize;
      const offset = (pageNumber - 1) * pageSize;
      
      let params = new HttpParams().set('limit', limit.toString())
                                    .set('offset', offset.toString());

      return this.http.get<AbilityEffectResponse>(this.baseUrl, { params })
                  .pipe(
                      mergeMap((initialResponse:any) => {
                          return from(initialResponse.results).pipe(
                            mergeMap((ability:any) => this.http.get(ability.url)),
                            toArray(),
                            map(details => ({
                              count: initialResponse.count,
                              next: initialResponse.next,
                              previous: initialResponse.previous,
                              results: details as AbilityEffect[]
                            }))
                          );
                        }),
                        shareReplay(1)                        
                  );
  }
}
