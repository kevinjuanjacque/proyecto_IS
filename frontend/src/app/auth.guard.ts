import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(
     private service: UsuariosService,
     private router: Router
   ){}
  canActivate(): boolean{
    if(this.service.verificarLogin()){
      return true;
    }
    this.router.navigate(['/']);
  }
  
}
