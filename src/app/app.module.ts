import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPipe } from './pipes/video/video.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandasInfoComponent } from './components/bandas-info/bandas-info.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoPipe,
    NavbarComponent,
    BandasComponent,
    BandasInfoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
