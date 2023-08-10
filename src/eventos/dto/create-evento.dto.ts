import {IsNotEmpty,IsString,MaxLength} from 'class-validator';

export class CreateEventoDto {
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    codigo: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    descripcion: string;
    
}
