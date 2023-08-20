import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TurnoSae extends Document {

  _id?: string;

  @Prop({ required: true })
  rut_maestro: string;

  @Prop({ required: true })
  codigo_turno: string;

  @Prop({ required: true })
  rut_ayudante: string;

  @Prop({ required: true })
  patente_vehiculo: string;

  @Prop({ required: true })
  km_inicia: string;

  @Prop({ required: true })
  km_final: string;

  @Prop({ required: true })
  codigo_oficina: string 

  @Prop({ required: true })
  fecha_hora_inicio: string;

  @Prop({ required: true })
  fecha_hora_final: string;

  @Prop({ required: true, default: Date.now })
  fecha_hora_recepcion: Date;
  
  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: 1 })
  estado_envio: number;
  
}

export const TurnoSaeSchema = SchemaFactory.createForClass(TurnoSae);
