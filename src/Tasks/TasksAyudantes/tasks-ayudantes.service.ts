import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, map, mapTo } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { ayudante } from './ayudante.model';
import { Ayudante } from 'src/ayudantes/entities/ayudante.entity';



@Injectable()
export class TasksService {

  private readonly baseUrl = 'https://backend-pelom-production.up.railway.app';
  private sessionCookie: string[] | undefined;

  constructor(private readonly httpService: HttpService,
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(Ayudante.name)
    private ayudanteModel: Model<Ayudante>,
  ) { }


  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {

    console.log('Ejecutando tarea programada cada 1 Hora');

    console.log('Ejecutando Obtener Ayudantes');
    
    console.log(await this.checkMongoDBConnection());

    try {

      //Iniciar sesión
      const loginResponse = await this.login();

      //console.log("login response : ",loginResponse);


      //Obtener ayudantes
      const usersResponse = await this.getAyudantes();

      //Obtener ayudantes 
      const listaAyudantes: ayudante[] = usersResponse.data;

      console.log("cantidad ayudantes : ", listaAyudantes.length);

      //Insertar Ayudantes en MongoDB
      try {

        // Limpiar la tabla antes de insertar
        await this.ayudanteModel.deleteMany({});


        // Insertar usuarios en MongoDB
        if (listaAyudantes.length > 0) {

          try {
            const ayudantesParaInsertar = listaAyudantes.map(ayudante => ({
              rut: ayudante.rut,
              nombre: ayudante.nombre
            }));

            await this.ayudanteModel.insertMany(ayudantesParaInsertar);

            console.log('Ayudantes insertados en MongoDB con éxito');

          } catch (error) {

            console.error('Error al insertar ayudantes en MongoDB:', error);
          
          }

          
        } else {

          console.log('No hay ayudantes para insertar en MongoDB');
        
        }

      } catch (e) {

        console.error('Error al insertar ayudantes en MongoDB:', e);
      
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


  getAyudantes(): Promise<AxiosResponse<ayudante[]>> {

    return this.httpService.get(`${this.baseUrl}/api/movil/v1/ayudantes`, this.getAxiosConfig())
      .pipe(
        map((ayudantes) => {
          return ayudantes;
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
