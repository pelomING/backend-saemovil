import { Vehiculo  } from '../entities/vehiculo.entity';

export interface LoginResponse {
    user: Vehiculo;
    token: string;
}