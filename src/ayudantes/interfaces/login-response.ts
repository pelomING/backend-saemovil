import { Ayudante } from '../entities/ayudante.entity';

export interface LoginResponse {
    user: Ayudante;
    token: string;
}