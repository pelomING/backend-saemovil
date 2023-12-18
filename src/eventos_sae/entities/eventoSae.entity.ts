import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EventoSae extends Document {

  _id?: string;
 
  @Prop({ required: true })
  num_ot: string;

  @Prop({ required: true })
  despachador: string; 

  @Prop({ required: true })
  tipo_evento: string;

  @Prop({ required: true })
  rut_maestro: string;
  
  @Prop({ required: true })
  rut_ayudante: string;


  @Prop({ required: true })
  codigo_brigada: string;

  @Prop({ required: true })
  codigo_tipoturno: string 

  @Prop({ required: true })
  codigo_comuna: string 


  @Prop({ required: true })
  patente_vehiculo: string

  @Prop({ required: true })
  fecha_hora_inicio_turno: string


  requerimiento: string 


  @Prop({ required: true })
  trabajo_solicitado: string 


  @Prop({ required: true })
  trabajo_realizado: string 


  @Prop({ required: true })
  direccion: string 


  @Prop({ required: true })
  fecha_hora_ejecucion: string;
  

  @Prop({ required: true })
  hora_inicio: string;


  @Prop({ required: true })
  hora_termino: string;


  @Prop({ required: true })
  latitude: string;


  @Prop({ required: true })
  longitude: string;


  @Prop({ required: true })
  fecha_hora_recepcion: Date;


  @Prop({ default: true })
  isActive: boolean;


  @Prop({ default: 1 })
  estado_envio: number;


}

export const EventoSchema = SchemaFactory.createForClass(EventoSae);
