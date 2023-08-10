import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TurnoSae extends Document {

  _id?: string;

  @Prop({ required: true })
  rut_maestro: string;

  @Prop({ required: true })
  tipo_turno: string;

  @Prop({ required: true })
  rut_ayudante: string;

  @Prop({ required: true })
  patente_vehiculo: string;

  @Prop({ required: true })
  klm_inicia: string;

  @Prop({ required: true })
  klm_final: string;

  @Prop({ required: true, default: Date.now })
  fecha_hora: Date;

  @Prop({ default: true })
  isActive: boolean;
  
}

export const TurnoSaeSchema = SchemaFactory.createForClass(TurnoSae);
