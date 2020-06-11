import { Injectable } from '@angular/core';

import {HttpInterceptor }  from '@angular/common/http';

import {UsuariosService} from './usuarios.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private service:UsuariosService) { }
  intercept(req,next){
    const tokenReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.service.getToken()}`
      }
    })
    return next.handle(tokenReq);
  }
  
}
