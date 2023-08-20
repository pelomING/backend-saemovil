import { Oficina  } from '../entities/oficina.entity';

export interface LoginResponse {
    user: Oficina;
    token: string;
}