import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsuariosComponent} from './componentes/usuarios/usuarios.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/usr',
    pathMatch: 'full'
  },
{
  path:'usr',
  component: UsuariosComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
