import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsuariosComponent} from './componentes/usuarios/usuarios.component'

import {UpFileComponent} from './componentes/up-file/up-file.component';

import{BuscadorComponent} from './componentes/buscador/buscador.component';

import {AuthGuard} from './auth.guard'

  const routes: Routes = [
  {
    path:'',
    redirectTo: '/search',
    pathMatch: 'full'
  },
{
  path:'cargar',
  component: UpFileComponent,
  canActivate: [AuthGuard]
},
{
  path:'search',
  component: BuscadorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
