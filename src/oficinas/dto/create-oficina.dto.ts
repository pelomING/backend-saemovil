import {IsString,IsNotEmpty,MaxLength} from 'class-validator';
 
export class CreateOficinaDto {
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    codigo: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nombre: string;
    
}
