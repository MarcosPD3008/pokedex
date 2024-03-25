import { Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

export const FeatureRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'pokemon',
        pathMatch: 'full'
    },
    { 
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: 'pokemon',
                loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
            }
        ]
    },

];