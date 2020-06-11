import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BandasComponent} from './components/bandas/bandas.component'
import {BandasInfoComponent} from './components/bandas-info/bandas-info.component'
const routes: Routes = [
  { path: 'bandas', component: BandasComponent},
  { path: 'bandasInfo/:id', component: BandasInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [];
