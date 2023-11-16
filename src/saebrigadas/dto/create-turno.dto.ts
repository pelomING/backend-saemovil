import {IsString,IsNotEmpty,MaxLength} from 'class-validator';
 
export class CreateTurnoDto {
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    codigo: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    horario: string;
    
}
