import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthComponent } from './auth.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        AuthHeaderComponent,
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule {}