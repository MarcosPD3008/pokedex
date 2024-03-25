import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, provideRouter } from '@angular/router';
import { FeatureRoutes } from './features.routes';
import { CoreModule } from '../core/core.module';
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
    exports: [
        FeaturesComponent
    ],
    declarations: [
        FeaturesComponent
    ],
    providers: [
        provideRouter(FeatureRoutes)
    ]
})
export class FeaturesModule { }
