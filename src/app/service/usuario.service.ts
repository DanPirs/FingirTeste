import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:3000/usuario/listar')

  }

  getById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>('http://localhost:3000/usuario/listar/${id}')
  }

  putUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:3000/usuario/${id}/update', usuario)
  }

  deleteUsuario(id: number){
    return this.http.delete('http://localhost:3000/usuario/${id}/delete')
  }

}

