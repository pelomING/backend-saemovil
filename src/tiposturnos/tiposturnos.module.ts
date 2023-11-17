import { Module } from '@nestjs/common';

import { TiposTurnosController } from './tiposturnos.controller';
import { TiposTurnosService } from './tiposturnos.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { TipoTurno,TipoTurnoSchema } from './entities/tipoturno.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [TiposTurnosController],
  providers: [TiposTurnosService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: TipoTurno.name,
        schema: TipoTurnoSchema
      }
    ]),


    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '48h' },
    }),
    
    AuthModule

  ]
})

export class TipoTurnosModule {}
