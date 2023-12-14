import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, map, mapTo } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Connection, Model } from 'mongoose';

import { Test, TestModel } from './crear.model';


import { User, UserSchema } from '../../auth/entities/user.entity';



@Injectable()
export class TasksService {

  private readonly baseUrl = 'https://backend-pelom-production.up.railway.app';
  private sessionCookie: string[] | undefined;

  constructor(private readonly httpService: HttpService,
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) { }


  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {

    console.log('Ejecutando tarea programada cada 30 minmutos');

    console.log(await this.checkMongoDBConnection());

    try {

      //Iniciar sesión
      const loginResponse = await this.login();

      //Obtener usuarios
      const usersResponse = await this.getUsers();

      //Obtener usuarios 
      const test: Test[] = usersResponse.data;

      console.log(test.length);

      //Insertar usuarios en MongoDB
      try {


        // Limpiar la tabla antes de insertar
        await this.userModel.deleteMany({});


        // Insertar usuarios en MongoDB
        if (test.length > 0) {

          try {
            const usuariosParaInsertar = test.map(user => ({
              email: user.rut,
              name: user.nombre,
              password: user.password,
              rut: user.rut,
              isActive: true,
              roles: user.rol
            }));

            await this.userModel.insertMany(usuariosParaInsertar);
            console.log('Usuarios insertados en MongoDB con éxito');

          } catch (error) {
            console.error('Error al insertar usuarios en MongoDB:', error);
          }
          
        } else {
          console.log('No hay usuarios para insertar en MongoDB');
        }

      } catch (e) {
        console.error('Error al insertar usuarios en MongoDB:', e);
      }

    } catch (error) {
      console.error('Error en la tarea:', error);
    }
  }



  login(): Promise<AxiosResponse<any[] | any> | undefined> {

    const credentials = {
      username: 'app_saemovil',
      password: '123456',
    };

    return this.httpService.post(`${this.baseUrl}/api/auth/signin`, credentials, this.getAxiosConfig())
      .pipe(
        map((user) => {
          this.sessionCookie = user.headers['set-cookie'];
          return user.data;
        }),
        catchError((error) => {
          console.log(error.response.status);
          return throwError(error.response.data);
        }),
      )
      .toPromise();
  }


  getUsers(): Promise<AxiosResponse<Test[]>> {

    return this.httpService.get(`${this.baseUrl}/api/movil/v1/usuariosapp`, this.getAxiosConfig())
      .pipe(
        map((users) => {
          return users;
        }),
        catchError((error) => {
          console.error(error.response.status);
          return throwError(error.response.data);
        }),
      )
      .toPromise();

  }



  private getAxiosConfig(): AxiosRequestConfig {
    return {
      headers: {
        Cookie: this.sessionCookie,
      },
      withCredentials: true,
    };
  }


  async checkMongoDBConnection(): Promise<string> {
    try {
      await this.connection.db.admin().ping(); // Intenta realizar una operación simple para validar la conexión
      return 'MongoDB connection is healthy';
    } catch (error) {
      throw new Error(`MongoDB connection error: ${error.message}`);
    }
  }




}
