import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products-details/products-details.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';


    export const routes: Routes = [
        {path:'home',component:HomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'products/:id',component:ProductDetailsComponent},
        {path:'products-form/:id',component:ProductsFormComponent}
      ];
