import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { UsuarioModule } from './../usuario/usuario.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import passport from 'passport';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsuarioModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [JwtModule, AuthService]
})
export class AuthModule {}
