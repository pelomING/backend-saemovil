import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Oficina extends Document {

  _id?: string;

  @Prop({ required: true })
  codigo: string;

  @Prop({ required: true })
  nombre: string;
  
  @Prop({ required: true, default: Date.now })
  fecha_hora: Date;

  @Prop({ default: true })
  isActive: boolean;
  
}

export const OficinaSchema = SchemaFactory.createForClass(Oficina);
