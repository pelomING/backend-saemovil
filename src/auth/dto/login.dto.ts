import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {

    @MinLength(10)
    @IsNotEmpty()
    rut: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;

}