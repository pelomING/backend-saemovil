import { Evento  } from '../entities/evento.entity';

export interface LoginResponse {
    user: Evento;
    token: string;
}