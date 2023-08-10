import { EventoSae } from '../entities/eventoSae.entity';

export interface LoginResponse {
    user: EventoSae;
    token: string;
}