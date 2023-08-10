import { Module } from '@nestjs/common';
import { EventosSaeController } from './eventos_sae.controller';
import { EventosSaeService } from './eventos_sae.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { EventoSae,EventoSchema } from './entities/eventoSae.entity';

import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [EventosSaeController],
  providers: [EventosSaeService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: EventoSae.name,
        schema: EventoSchema
      }
    ]),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '6h' },
    }),

    AuthModule

  ]
})
export class EventosSaeModule {}
