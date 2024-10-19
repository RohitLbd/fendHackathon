import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page11Component } from './page1/page1-1/page1-1.component';
import { Page12Component } from './page1/page1-2/page1-2.component';
import { Page21Component } from './page2/page2-1/page2-1.component';
import { Page22Component } from './page2/page2-2/page2-2.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page11Component,
    Page12Component,
    Page21Component,
    Page22Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
