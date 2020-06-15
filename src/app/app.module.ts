import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'  
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPipe } from './pipes/video/video.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandasInfoComponent } from './components/bandas-info/bandas-info.component';
import { Error404Component } from './components/error404/error404.component';
import { CrearBandaComponent } from './components/crear-banda/crear-banda.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    VideoPipe,
    FilterPipe,
    NavbarComponent,
    BandasComponent,
    BandasInfoComponent,
    Error404Component,
    CrearBandaComponent,
    HomeComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
