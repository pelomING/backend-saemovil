import { Module } from '@nestjs/common';
import { TurnosController } from './turnos.controller';
import { TurnosService } from './turnos.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Turno,TurnoSchema } from './entities/turno.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [TurnosController],
  providers: [TurnosService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: Turno.name,
        schema: TurnoSchema
      }
    ]),

    AuthModule

  ]
})

export class TurnosModule {}
