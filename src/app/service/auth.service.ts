import { UsuarioLogin } from './../model/usuario.login';
import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  private http: HttpClient
  ) {}

  entrar(usuarioLogin: UsuarioLogin): Observable <UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:3000/usuario/login', usuarioLogin)

  }

  cadastrarUsuario(usuario: Usuario): Observable <Usuario>{
    return this.http.post<Usuario>('http://localhost:3000/usuario/cadastrar', usuario)

  }


}
