import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { TasksService } from './tasks-ayudantes.service';
import { Ayudante, AyudanteSchema } from 'src/ayudantes/entities/ayudante.entity';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: Ayudante.name,
        schema: AyudanteSchema
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
export class TasksAyudanteModule {}
