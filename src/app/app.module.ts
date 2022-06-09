import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CursosListComponent,
    HeaderComponent,
    AddCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
