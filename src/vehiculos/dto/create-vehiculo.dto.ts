import {IsString,IsNotEmpty,MaxLength} from 'class-validator';

export class CreateVehiculoDto {
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    marca: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    patente: string;
    
}
