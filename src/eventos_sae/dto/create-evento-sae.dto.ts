import {IsString,IsNotEmpty,MaxLength,Matches} from 'class-validator';

export class CreateEventoSaeDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    num_ot: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    tipo_evento: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @Matches(/^(\d{1,3}(?:\.\d{3})*)-(\d|K)$/, { message: 'El campo rut_maestro debe tener un formato válido de RUT chileno (ej: 12.345.678-9)' })
    rut_maestro: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    codigo_turno: string;
  
}
