import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

import { TasksService } from './tasks-vehiculo.service';

import { Vehiculo, VehiculoSchema  } from 'src/vehiculos/entities/vehiculo.entity';


@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema
      }
    ]),

    HttpModule.register({
      headers: {
        'Content-Type': 'application/json',
      },
    })

  ],
  providers: [TasksService],
  exports: [TasksService], // Exporta el servicio si es necesario
})
export class TasksVehiculoModule {}
