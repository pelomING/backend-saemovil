import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TipoTurno extends Document {

  _id?: string;

  id: string;
  nombre: string;
  
}

export const TipoTurnoSchema = SchemaFactory.createForClass(TipoTurno);
