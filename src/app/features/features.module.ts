import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, provideRouter } from '@angular/router';
import { FeatureRoutes } from './features.routes';
import { CoreModule } from '../core/core.module';
import { PokemonTableComponent } from './home/pokemon-table/pokemon-table.component';
import { PokemonCardComponent } from './home/pokemon-card/pokemon-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterModule.forChild(FeatureRoutes),
        SharedModule
    ],
    exports: [],
    declarations: [
        FeaturesComponent,
        HomeComponent,
        DetailsComponent,
        PokemonTableComponent,
        PokemonCardComponent,
    ],
    providers: [
        provideRouter(FeatureRoutes)
    ],
})
export class FeaturesModule { }
