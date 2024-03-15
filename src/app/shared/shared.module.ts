import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        PaginationComponent,
        LoadingComponent,
    ],
    declarations: [
        PaginationComponent,
        LoadingComponent
    ],
    providers: [],
})
export class SharedModule { }
