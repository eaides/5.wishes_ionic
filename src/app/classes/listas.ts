import { ListaItem } from './lista-items';
export class Lista {
  nombre: string;
  terminado: boolean;
  items: ListaItem[];
  idx_from_full: number = -1;

  constructor(nombre:string) {
    this.nombre = nombre;
    this.terminado = false;
    this.idx_from_full = -1;
  }
}