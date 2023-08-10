import { Turno  } from '../entities/turno.entity';

export interface LoginResponse {
    user: Turno;
    token: string;
}