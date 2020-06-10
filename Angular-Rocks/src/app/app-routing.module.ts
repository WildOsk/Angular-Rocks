import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BandasComponent} from './components/bandas/bandas.component'

const routes: Routes = [
  { path: 'bandas', component: BandasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [];
