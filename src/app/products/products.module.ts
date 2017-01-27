import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InterestComponent } from './interest/interest.component';
import { SportifyComponent } from './sportify/sportify.component';
import { ByIdComponent } from './by-id/by-id.component';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'products/:id', component: ByIdComponent },
    { path: 'interest', component: InterestComponent },
    { path: 'sportify', component: SportifyComponent },
];

@NgModule( {
    declarations: [ProductsComponent,
        MainComponent,
        InterestComponent,
        SportifyComponent,
        ByIdComponent],
    exports: [
        ProductsComponent,
        MainComponent,
        InterestComponent,
        SportifyComponent,
        ByIdComponent
    ],
    imports: [RouterModule]

})
export class ProductsComponentModule { }
