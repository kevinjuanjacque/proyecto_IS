import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuarios } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  selectedUser: Usuarios;
  usuarios: Usuarios[ ];
 
  private url='http://localhost:3000';
  constructor(private Http: HttpClient) {
    this.selectedUser=new Usuarios();
   }


  iniciar(User){
    return this.Http.post<any>(this.url+'/api/IniciarSesion',User);
    
  }
}
 