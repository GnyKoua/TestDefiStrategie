import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuteursDetailsComponent } from './auteurs-details/auteurs-details.component';
import { AuteursListeComponent } from './auteurs-liste/auteurs-liste.component';

const routes: Routes = [
  {
    path: 'all',
    component: AuteursListeComponent
  },
  {
    path: ':id',
    component: AuteursDetailsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuteursRoutingModule { }
