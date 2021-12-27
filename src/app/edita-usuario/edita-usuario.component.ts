import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  let id = this.route.snapshot.params['id']
  this.findById(id)
  }

  findById(id: number){
    this.usuarioService.getById(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
}

atualizar(){
  this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
    this.usuario = resp
    alert ('Tema atualizado com sucesso!')
    this.router.navigate(['/inicio'])
  })
}

}
