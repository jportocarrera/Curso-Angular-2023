import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialComponent } from './components/material/material.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { BooleanoATextoPipe } from './pipes/booleano-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { NombresPipe } from './pipes/nombres.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    NavbarComponent,
    SidebarComponent,
    EditarCursoDialogComponent,
    FormatoFechaPipe,
    BooleanoATextoPipe,
    BooleanoEstiloDirective,
    NombresPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
