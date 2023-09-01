import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Evento,EventoSchema } from './entities/evento.entity';

import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [EventosController],
  providers: [EventosService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: Evento.name,
        schema: EventoSchema
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

export class EventosModule {}
