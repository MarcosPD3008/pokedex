import { Injectable } from '@angular/core';
import { filter, of } from 'rxjs';
import { Entities } from '../enums/entity';

@Injectable({providedIn: 'root'})
export class FavoriteService {
    constructor() { }
    
    getFavorites(type:Entities) {
        return of(
            JSON.parse(localStorage.getItem('favorites') || '[]')
                .filter((favorite:any) => favorite.type === type)
        )
    }

    addFavorite(favorite:any) {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        return of(favorites);
    }

    removeFavorite(id:number, entity:Entities) {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites = favorites.filter((f:any) => f.id !== id && f.type !== entity);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        return of(favorites);
    }

    isFavorite(id:number, entity:Entities) {
        return of(
            JSON.parse(localStorage.getItem('favorites') || '[]')
                .some((favorite:any) => favorite.id === id && favorite.type === entity)
        )
    }
}