import { Oficina  } from '../entities/comuna.entity';

export interface LoginResponse {
    user: Oficina;
    token: string;
}