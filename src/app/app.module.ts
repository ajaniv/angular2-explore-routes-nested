import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    RouterModule,
    Router,
    Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {
    routes as childRoutes,
    ProductsComponentModule
} from './products/products.module';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: childRoutes }
];

@NgModule( {
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ProductsComponentModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
