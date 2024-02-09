import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsRoutingModule } from './layouts.routing';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
