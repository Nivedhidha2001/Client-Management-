import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductformComponent } from './products/productform/productform.component';
import { ProducteditComponent } from './products/productedit/productedit.component';

const routes: Routes = [

  {path:'productlist',component:ProductlistComponent},
  {path:'productform',component:ProductformComponent},
  {path:'productlist/editproduct/:id',component:ProducteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
