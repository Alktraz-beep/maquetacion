import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { InputCategoriaComponent } from './components/input-categoria/input-categoria.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ContenedorWidgetsComponent } from './components/contenedor-widgets/contenedor-widgets.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpcionesComponent,
    InputCategoriaComponent,
    WidgetComponent,
    ContenedorWidgetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
