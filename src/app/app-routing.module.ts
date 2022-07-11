import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './views/home/home.component';
import { ProcuctCrudComponent } from './views/procuct-crud/procuct-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent},
  {
    path:'products',
    component: ProcuctCrudComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
