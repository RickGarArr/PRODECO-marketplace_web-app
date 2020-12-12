import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NoPageFound } from './no-page-found/no-page-found';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent,
        NoPageFound,
        FooterComponent,
    ],
    exports: [
        NavbarComponent,
        NoPageFound,
        FooterComponent,
    ]
})
export class SharedModule {}