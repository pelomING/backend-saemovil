import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TurnosSaeService } from './turnos_sae.service';
import { TurnosSaeController } from './turnos_sae.controller';
import { TurnoSae,TurnoSaeSchema } from './entities/turnoSae.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [TurnosSaeController],
  providers: [TurnosSaeService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: TurnoSae.name,
        schema: TurnoSaeSchema
      }
    ]),

    AuthModule

  ]
})

export class TurnosSaeModule {}
