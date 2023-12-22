// auth.service.ts
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService {
  private readonly baseUrl = 'https://backend-pelom-production.up.railway.app';

  constructor(private readonly httpService: HttpService) {}

  private getAxiosConfig(): AxiosRequestConfig {
    return {
      withCredentials: true, // Habilita el uso de cookies en la solicitud
    };
  }

  async login(): Promise<Observable<AxiosResponse<any>>> {

    const credentials = {
      username: 'app_movil',
      password: '123456',
    };

    return this.httpService.post(`${this.baseUrl}/api/auth/signin`, credentials, this.getAxiosConfig());
    
  }

  getUsers(): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.baseUrl}/api/movil/v1/usuariosapp`, this.getAxiosConfig());
  }
}
