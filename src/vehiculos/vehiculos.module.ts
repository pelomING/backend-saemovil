import { Module } from '@nestjs/common';
import { VehiculosController } from './vehiculos.controller';
import { VehiculosService } from './vehiculos.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Vehiculo,VehiculoSchema } from './entities/vehiculo.entity';

import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [VehiculosController],
  providers: [VehiculosService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema
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

export class VehiculosModule {}
