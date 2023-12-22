import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HttpModule } from '@nestjs/axios';
import { TasksService } from './tasks.service';

import { User, UserSchema } from '../../auth/entities/user.entity';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
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
export class TasksModule {}
