import { Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

export const FeatureRoutes: Routes = [
    { 
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: 'pokemon',
                loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
            },
            {
                path: 'moves',
                loadChildren: () => import('./moves/moves.module').then(m => m.MovesModule)
            },
            {
               path: 'abilities',
                loadChildren: () => import('./abilities/abilities.module').then(m => m.AbilitiesModule) 
            },
            {
                path: '**',
                redirectTo: 'pokemon',
                pathMatch: 'full'
            }
        ]
    },

];