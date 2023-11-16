import { TipoTurno  } from '../entities/tipoturno.entity';

export interface LoginResponse {
    user: TipoTurno;
    token: string;
}