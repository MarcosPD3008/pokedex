import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, map, mergeMap, shareReplay, toArray } from 'rxjs';
import { MoveResponse } from '../models/moves.models';

@Injectable({providedIn: 'root'})
export class MovesService {
    baseUrl:string;
    constructor(private http:HttpClient) {
      this.baseUrl = `${environment.baseUrl}move`;
    }    

    getMoves(pageNumber:number = 1, pageSize:number = 12) {
        const limit = pageSize;
        const offset = (pageNumber - 1) * pageSize;
        
        let params = new HttpParams().set('limit', limit.toString())
                                      .set('offset', offset.toString());

        return this.http.get<MoveResponse>(this.baseUrl, { params })
                    .pipe(
                        mergeMap((initialResponse:any) => {
                            return from(initialResponse.results).pipe(
                              mergeMap((move:any) => this.http.get(move.url)),
                              toArray(),
                              map(details => ({
                                count: initialResponse.count,
                                next: initialResponse.next,
                                previous: initialResponse.previous,
                                results: details
                              }))
                            );
                          }),
                          shareReplay(1)                        
                    );
    }
}