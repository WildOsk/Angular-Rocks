import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BandasComponent} from './components/bandas/bandas.component'
import {BandasInfoComponent} from './components/bandas-info/bandas-info.component'
import {CrearBandaComponent} from './components/crear-banda/crear-banda.component'
import {HomeComponent} from './components/home/home.component'
import {Error404Component} from './components/error404/error404.component'
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'bandas', component: BandasComponent},
  { path: 'bandasInfo/:id', component: BandasInfoComponent,},
  { path: 'crearBanda', component: CrearBandaComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [];
