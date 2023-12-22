import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class SaeBrigadas extends Document {

  _id?: string;

  id: string;

  brigada:string;

}

export const SaeBrigadasSchema = SchemaFactory.createForClass(SaeBrigadas);
