import { SaeBrigadas  } from '../entities/saebrigadas.entity';

export interface LoginResponse {
    user: SaeBrigadas;
    token: string;
}