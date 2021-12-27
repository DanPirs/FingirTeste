import { AuthService } from './../service/auth.service';
import { UsuarioLogin } from './../model/usuario.login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll (0,0)
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe((resp: UsuarioLogin) => {
      this.userLogin = resp
      this.router.navigate (['/inicio'])
    })
  }

}
