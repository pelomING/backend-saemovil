import { Module } from '@nestjs/common';
import { ComunasController } from './comunas.controller';
import { ComunasService } from './comunas.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Comuna,ComunaSchema } from './entities/comuna.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [ComunasController],
  providers: [ComunasService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: Comuna.name,
        schema: ComunaSchema
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

export class ComunasModule {}
