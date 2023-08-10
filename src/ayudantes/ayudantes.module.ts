import { Module } from '@nestjs/common';
import { AyudantesController } from './ayudantes.controller';
import { AyudantesService } from './ayudantes.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Ayudante,AyudanteSchema } from './entities/ayudante.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [AyudantesController],
  providers: [AyudantesService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: Ayudante.name,
        schema: AyudanteSchema
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

export class AyudantesModule {}
