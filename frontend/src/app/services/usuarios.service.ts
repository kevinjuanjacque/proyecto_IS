import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuarios } from '../models/usuarios';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  selectedUser: Usuarios;
  usuarios: Usuarios[ ];
  
 
  private url='http://localhost:3000';
  constructor(private Http: HttpClient, private router :Router) {
    this.selectedUser=new Usuarios();
   }


  iniciar(User){
    return this.Http.post<any>(this.url+'/api/IniciarSesion',User);
    
  }
  //subir archi
  uploadFile(formData) {
    let urlAPI = 'http://localhost:3000/images/upload';
    return this.Http.post(urlAPI, formData);
  }
  //-------

  //verifica si hay una sesion iniciada
  verificarLogin(): Boolean{
    return !!localStorage.getItem('token');
  }

  removerToken(){
      localStorage.removeItem('token');
      this.router.navigate(['/']);
  }
  obtenerEmail() {
    const tok=localStorage.getItem('token');
    const usuario=(this.Http.post(this.url+'/api/',tok));
    console.log(usuario.subscribe(res=>{console.log(res)}));
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
 