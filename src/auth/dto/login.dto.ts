import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {

    @MinLength(8)
    @IsNotEmpty()
    rut: string;

    @MinLength(8)
    @IsNotEmpty()
    password: string;

}