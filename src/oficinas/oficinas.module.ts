import { Module } from '@nestjs/common';
import { OficinasController } from './oficinas.controller';
import { OficinasService } from './oficinas.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Oficina,OficinaSchema } from './entities/oficina.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [OficinasController],
  providers: [OficinasService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: Oficina.name,
        schema: OficinaSchema
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

export class OficinasModule {}
