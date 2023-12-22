import mongoose, { Schema, Document } from 'mongoose';

export interface Test extends Document {
  email: any;
  _id?: string;
  id: string;
  rut: string;
  nombre: string;
  password: string;
  funcion: string;
  rol: string;
  base: string;
}

export const TestSchema = new Schema({
  id: { type: String, required: true },
  rut: { type: String, required: true },
  nombre: { type: String, required: true },
  password: { type: String, required: true },
  funcion: { type: String, required: true },
  rol: { type: String, required: true },
  base: { type: String, required: true },
});

export const TestModel = mongoose.model<Test>('Test', TestSchema);
 