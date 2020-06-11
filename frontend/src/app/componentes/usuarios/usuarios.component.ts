import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../../models/usuarios';

import { CommonModule } from '@angular/common';

import {Router} from '@angular/router';

import {FormsModule} from '@angular/forms';
import { Subscriber } from 'rxjs';


declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[UsuariosService]
})
export class UsuariosComponent implements OnInit {
  
  user={
    email:'',
    password:''
  }  
  constructor(public usuariosService: UsuariosService, private router: Router) { }
  
  ngOnInit(): void {
    
  }
  iniciar() {
    this.usuariosService.iniciar(this.user).subscribe(
        res=> {console.log(res),
              localStorage.setItem('token',res);
        },
        err=>{
          if(err.status==404){M.toast({html: 'Usuario no existe'})}
          if(err.status==401){M.toast({html: 'Datos no validos'})}
          }
          );
  }
  


}
