import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuteursCreateComponent } from './auteurs-create/auteurs-create.component';
import { AuteursListeComponent } from './auteurs-liste/auteurs-liste.component';
import { AuteursRoutingModule } from './auteurs.routing';
import { AuteursDetailsComponent } from './auteurs-details/auteurs-details.component';



@NgModule({
  declarations: [
    AuteursListeComponent,
    AuteursCreateComponent,
    AuteursDetailsComponent,
  ],
  imports: [
    CommonModule,
    AuteursRoutingModule
  ]
})
export class AuteursModule { }
