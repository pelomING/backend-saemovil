import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Evento extends Document {

  _id?: string;

  @Prop({ required: true })
  codigo: string;

  @Prop({ required: true })
  descripcion: string;
  
  @Prop({ required: true, default: Date.now })
  fecha_hora: Date;

  @Prop({ default: true })
  isActive: boolean;
  
}

export const EventoSchema = SchemaFactory.createForClass(Evento);
