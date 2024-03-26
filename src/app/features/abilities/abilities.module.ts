import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AbilitiesRoutes } from './abilities.routes';
import { AbilitiesTableComponent } from './abilities-table/abilities-table.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        AbilitiesTableComponent
    ],
    providers: [
        provideRouter(AbilitiesRoutes)
    ],
})

export class AbilitiesModule { }