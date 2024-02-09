import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainRoutesName } from './app.routes.name';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: AppMainRoutesName.login,
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: AppMainRoutesName.dash,
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: AppMainRoutesName.dash,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: `/${AppMainRoutesName.dash}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
