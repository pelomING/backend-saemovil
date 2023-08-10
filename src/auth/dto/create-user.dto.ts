import { IsNotEmpty,IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;

}
