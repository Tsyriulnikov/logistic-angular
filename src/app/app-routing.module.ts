import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {MapComponent} from './components/map/map.component'
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'/map', pathMatch:'full'},
  {path:'map',component:MapComponent},
  {path:'404',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
