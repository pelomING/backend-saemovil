import {IsString,IsNotEmpty,MaxLength,Matches} from 'class-validator';

export class CreateEventoSaeDto {
 
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    num_ot: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    despachador: string 

    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    tipo_evento: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(14)
   // @Matches(/^(\d{1,3}(?:\.\d{3})*)-(\d|K)$/, { message: 'El campo rut_maestro debe tener un formato válido de RUT chileno (ej: 12.345.678-9)' })
    rut_maestro: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(14)
   // @Matches(/^(\d{1,3}(?:\.\d{3})*)-(\d|K)$/, { message: 'El campo rut_ayudante debe tener un formato válido de RUT chileno (ej: 12.345.678-9)' })
    rut_ayudante: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    codigo_brigada: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    codigo_tipoturno: string 

    @IsString()
    @IsNotEmpty()
    patente_vehiculo: string

    @IsString()
    @IsNotEmpty()
    fecha_hora_inicio_turno: string


    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    codigo_comuna: string 
  
    @IsString()
    @MaxLength(10)
    requerimiento: string 
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(600)
    trabajo_solicitado: string 
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(600)
    trabajo_realizado: string 
        
    @IsString()
    @IsNotEmpty()
    @MaxLength(600)
    direccion: string 

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    fecha_hora_ejecucion: string

    @IsString()
    @MaxLength(50)
    latitude: string;

    @IsString()
    @MaxLength(50)
    longitude: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    hora_inicio: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    hora_termino: string


}
