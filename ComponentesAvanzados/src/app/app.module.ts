import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConEstadoComponent } from './con-estado/con-estado.component';
import { SinEstadoComponent } from './sin-estado/sin-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    ConEstadoComponent,
    SinEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
