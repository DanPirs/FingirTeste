// import { AtualizarUsuarioDto } from './dto/atualizar.usuario.dto';
import { AuthService} from './../auth/auth.service';
import { ResultadoDto } from './../dto/resultado.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Request, UseGuards } from '@nestjs/common';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import {UsuarioService } from './usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { identity } from 'rxjs';

@Controller('usuario')
export class usuarioController {
  UsuarioService: any;
  constructor(private readonly usuarioService: UsuarioService, private authService: AuthService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]>{
      return this.usuarioService.listar()
  }


  @Put(':id/update')
  async update(@Param('id') id, @Body() data: Usuario): Promise<any> {
      data.id = Number(id);
      console.log('Update #' + data.id)
      return this.usuarioService.update(data);
  }  
  
  @Delete(':id/delete')
  async apaga(@Param('id') id, @Body() data: Usuario): Promise<any> {
    data.id = Number(id);  
  return this.usuarioService.delete(data);  
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data)
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}