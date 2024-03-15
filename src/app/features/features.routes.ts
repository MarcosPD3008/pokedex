import { Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

export const FeatureRoutes: Routes = [
    { 
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'details/:id',
                component: DetailsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];