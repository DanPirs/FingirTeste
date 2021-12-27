import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { UsuarioLogin } from './../model/usuario.login';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  confirmarSenha: string
  usuario: Usuario = new Usuario

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  window.scroll (0,0)
  }

  confirmaSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  cadastrar(){
    if (this.confirmarSenha != this.usuario.senha){
      alert ('As senhas estao incorretas')
    }
    else {
      this.authService.cadastrarUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert ('Usuario cadastrado com sucesso!')
      })
    }


  }


}
