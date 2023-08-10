import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';

export class CreateAyudanteDto {

  @IsNotEmpty({ message: 'El campo rut_ayudante es obligatorio' })
  @IsString({ message: 'El campo rut_ayudante debe ser una cadena de texto' })
  @Matches(/^(\d{1,3}(?:\.\d{3})*)-(\d|K)$/, { message: 'El campo rut_ayudante debe tener un formato válido de RUT chileno (ej: 12.345.678-9)' })
  @MaxLength(12)
  rut_ayudante: string;

  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
  @MaxLength(400, { message: 'El campo nombre no puede exceder los 400 caracteres' })
  @Matches(/^[a-zA-Z ]+$/, { message: 'El campo nombre solo puede contener letras, espacios y debe estar separado por espacios' })
  nombre: string;

} 
