import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovesRoutes } from './moves.routes';
import { MovesTableComponent } from './moves-table/moves-table.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        MovesTableComponent
    ],
    providers: [
        provideRouter(MovesRoutes)
    ],
})

export class MovesModule { }