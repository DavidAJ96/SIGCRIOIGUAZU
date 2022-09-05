import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:MainLayoutComponent,
    children:[
      { path: 'alumnos', loadChildren: () => import('./modules/alumnos/alumnos.module').then(m => m.AlumnosModule) },
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'cursos', loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule) }]


  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
