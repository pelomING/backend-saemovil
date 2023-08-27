import {IsString,IsNotEmpty,MaxLength} from 'class-validator';
  
export class CreateComunaDto {
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    codigo: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    oficina: string;
    
}
