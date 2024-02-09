
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainRoutesName } from '../app.routes.name';

const routes: Routes = [
  {
    path: AppMainRoutesName.auteurs,
    loadChildren: () => import('../pages/auteurs/auteurs.module').then(m => m.AuteursModule),
  },
  {
    path: '**',
    redirectTo: `${AppMainRoutesName.dash}/${AppMainRoutesName.auteurs}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LayoutsRoutingModule { }
