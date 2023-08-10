import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { TurnosSaeModule } from './turnos_sae/turnos_sae.module';
import { EventosSaeModule } from './eventos_sae/eventos_sae.module';

import { VehiculosModule } from './vehiculos/vehiculos.module';
import { TurnosModule } from './turnos/turnos.module';
import { AyudantesModule } from './ayudantes/ayudantes.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot( process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),

    AuthModule,

    TurnosSaeModule,

    EventosSaeModule,

    VehiculosModule,

    TurnosModule,

    AyudantesModule,

    EventosModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
