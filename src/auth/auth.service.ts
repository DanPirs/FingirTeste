import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService,
      private jwtService: JwtService
      ) {}
    async validarUsuario(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(email);
        if (email && bcrypt.compareSync(senha, usuario.senha)) {
          const { senha, ...result } = usuario;
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          token_de_acesso: this.jwtService.sign(payload),
        };
  }
}