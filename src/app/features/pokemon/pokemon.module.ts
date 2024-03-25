import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { provideRouter } from '@angular/router';
import { PokemonRoutes } from './pokemon.routes';
import { PokemonComponent } from './pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        PokemonComponent,
        PokemonCardComponent,
        PokemonTableComponent,
        PokemonDetailsComponent
    ],
    providers: [
        provideRouter(PokemonRoutes)
    ],
})

export class PokemonModule { }