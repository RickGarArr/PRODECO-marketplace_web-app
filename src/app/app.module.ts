import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CommonModule } from '@angular/common';

import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NgDropFilesDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),

    UsuarioModule,
    AuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
