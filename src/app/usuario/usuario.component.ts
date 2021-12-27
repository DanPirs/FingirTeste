import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario
  listaUsuario: Usuario[]

  constructor(private router: Router,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(){
    this.findAllUsuarios()
  }

  findAllUsuarios(){
    this.usuarioService.getAllUsuario().subscribe((resp: Usuario[]) => this.listaUsuario = resp)
  }

}
