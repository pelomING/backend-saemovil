import {IsString,IsNotEmpty,Matches,MaxLength} from 'class-validator';

export class CreateTurnoSaeDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @Matches(/^(\d{1,3}(?:\.\d{3})*)-(\d|K)$/, { message: 'El campo rut_maestro debe tener un formato válido de RUT chileno (ej: 12.345.678-9)' })
    rut_maestro: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    tipo_turno: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @Matches(/^(\d{1,3}(?:\.\d{3})*)-(\d|K)$/, { message: 'El campo rut_ayudante debe tener un formato válido de RUT chileno (ej: 12.345.678-9)' })
    rut_ayudante: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    patente_vehiculo: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    klm_inicia: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    klm_final: string;

}
