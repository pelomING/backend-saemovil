import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EventoSae extends Document {

  _id?: string;
 
  @Prop({ required: true })
  num_ot: string;

  @Prop({ required: true })
  tipo_evento: string;

  @Prop({ required: true })
  rut_maestro: string;
  
  @Prop({ required: true })
  rut_ayudante: string;

  @Prop({ required: true })
  codigo_turno: string;

  @Prop({ required: true })
  codigo_oficina: string 

  @Prop({ required: true })
  requerimiento: string 

  @Prop({ required: true })
  direccion: string 

  @Prop({ required: true })
  fecha_hora_ejecucion: string;
 
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
