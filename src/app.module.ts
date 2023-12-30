import { Module } from '@nestjs/common';

import { forwardRef } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { TurnosSaeModule } from './turnos_sae/turnos_sae.module';
import { EventosSaeModule } from './eventos_sae/eventos_sae.module';

import { VehiculosModule } from './vehiculos/vehiculos.module';
import { TurnosModule } from './turnos/turnos.module';
import { AyudantesModule } from './ayudantes/ayudantes.module';
import { EventosModule } from './eventos/eventos.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; // Importa el módulo 'path' de Node.js
import { OficinasModule } from './oficinas/oficinas.module';

import { ComunasModule } from './comunas/comunas.module';

import { TipoTurnosModule } from './tiposturnos/tiposturnos.module';

import { SaeBrigadasModule } from './saebrigadas/saebrigadas.module';

import { TasksModule } from './Tasks/Tasks/tasks.module';

import { TasksAyudanteModule  } from './Tasks/TasksAyudantes/tasks-ayudantes.module';

import { TasksVehiculoModule } from './Tasks/TasksVehiculos/tasks-vehiculo.module';


@Module({
  imports: [
    
    ScheduleModule.forRoot(),
    forwardRef(() => TasksModule ), // Importa el módulo de tareas si es necesario
    forwardRef(() => TasksAyudanteModule ),
    forwardRef(() => TasksVehiculoModule ),
      
    ConfigModule.forRoot(),

    MongooseModule.forRoot( process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Ruta a la carpeta pública
    }),
    
    AuthModule, 
    TurnosSaeModule,
    EventosSaeModule,
    VehiculosModule,
    TurnosModule,
    AyudantesModule,
    EventosModule,
    OficinasModule,
    ComunasModule,
    TipoTurnosModule,
    SaeBrigadasModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {


  constructor() {
    console.log(process.env.MONGO_URI);
  }
  

}
