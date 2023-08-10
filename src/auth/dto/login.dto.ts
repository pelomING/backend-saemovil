import { IsNotEmpty,IsEmail, MinLength } from 'class-validator';



export class LoginDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;

}