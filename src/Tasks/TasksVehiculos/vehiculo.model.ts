
export interface vehiculo extends Document {
  _id?: string;
  id: string;
  patente: string;
  marca: string;
  modelo: string;
  base: string;
  activa: string;
}
