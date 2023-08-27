import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comuna extends Document {

  _id?: string;

  @Prop({ required: true })
  codigo: string;

  @Prop({ required: true })
  nombre: string;
  
  @Prop({ required: true })
  oficina: string;

  @Prop({ required: true, default: Date.now })
  fecha_hora: Date;

  @Prop({ default: true })
  isActive: boolean;
  
}

export const ComunaSchema = SchemaFactory.createForClass(Comuna);
