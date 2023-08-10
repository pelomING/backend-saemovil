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
  codigo_turno: string;

  @Prop({ required: true, default: Date.now })
  fecha_hora: Date;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true, default: 1 })
  estado_envio: number;

}

export const EventoSchema = SchemaFactory.createForClass(EventoSae);
