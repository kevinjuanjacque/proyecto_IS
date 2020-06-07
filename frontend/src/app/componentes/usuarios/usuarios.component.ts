import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../../models/usuarios';

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
  constructor(public usuariosService: UsuariosService) { }
  
  ngOnInit(): void {
    
  }
  iniciar() {
    this.usuariosService.iniciar(this.user).subscribe(
        res=> {console.log(res)},
        err=>console.log(err)
      );
  }
  
  limpiar( form? : NgForm){
    if(form){
      form.reset();
      this.usuariosService.selectedUser=new Usuarios();
    }
  }
}
