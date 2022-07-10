import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProcuctCrudComponent } from './views/procuct-crud/procuct-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent},
  {
    path:'products',
    component: ProcuctCrudComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
