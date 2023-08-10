import { TurnoSae } from '../entities/turnoSae.entity';

export interface LoginResponse {
    user: TurnoSae;
    token: string;
}