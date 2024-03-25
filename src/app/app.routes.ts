import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokeapi',
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
    },
    {
        path: '**',
        redirectTo: 'pokeapi',
        pathMatch: 'full'
    }
];
