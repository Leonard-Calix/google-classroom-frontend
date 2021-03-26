import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClasesComponent } from './components/clases/clases.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { AsignacionesComponent } from './components/asignaciones/asignaciones.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClasesComponent,
    AnunciosComponent,
    AsignacionesComponent,
    ParticipantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    ClasesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
