import { Routes } from "@angular/router";
import { PokemonComponent } from "./pokemon.component";

export const PokemonRoutes: Routes = [
    {
        path: '',
        component: PokemonComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];