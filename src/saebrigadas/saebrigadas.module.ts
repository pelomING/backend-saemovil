import { Module } from '@nestjs/common';
import { SaeBrigadasController } from './saebrigadas.controller';
import { SaeBrigadasService } from './saebrigadas.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { SaeBrigadas,SaeBrigadasSchema } from './entities/saebrigadas.entity';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [SaeBrigadasController],
  providers: [SaeBrigadasService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: SaeBrigadas.name,
        schema: SaeBrigadasSchema
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

export class SaeBrigadasModule {}
