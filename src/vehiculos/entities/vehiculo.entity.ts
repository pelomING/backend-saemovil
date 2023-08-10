import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vehiculo extends Document {

  _id?: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  patente: string;
  
  @Prop({ required: true, default: Date.now })
  fecha_hora: Date;

  @Prop({ default: true })
  isActive: boolean;
  
}

export const VehiculoSchema = SchemaFactory.createForClass(Vehiculo);
