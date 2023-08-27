import { Comuna  } from '../entities/comuna.entity';

export interface LoginResponse {
    user: Comuna;
    token: string;
}