import { UsuarioModule } from './usuario.module';
import { ResultadoDto } from './../dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.nome = data.nome
    usuario.email = data.email
    usuario.contato = data.contato
    usuario.senha = bcrypt.hashSync(data.senha, 8)
    return this.usuarioRepository.save(usuario)
    
    .then((result) => {
      return<ResultadoDto>{
        status: true,
        menssagem: "Usuario cadastrado com sucesso"
      }
    })
    .catch((error) => {
      return<ResultadoDto>{
        status: false,
        menssagem: "Houve um erro no cadastro"
      }
    })
  }

  async update(data: Usuario): Promise<Usuario | any> { 
    data.senha = bcrypt.hashSync(data.senha, 8)
    return await this.usuarioRepository.update(data.id,data)
}

  async delete(data: Usuario): Promise<Usuario | any> { 
  return await this.usuarioRepository.delete(data)
}

  async findOne(email: string): Promise<Usuario | undefined> {
  return this.usuarioRepository.findOne({email: email});
}
}