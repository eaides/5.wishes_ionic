import {Injectable} from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosServiceService {

  listas: Lista[] = [];

  constructor() {

    let lista1 = new Lista('Compras de Supermercado');
    let lista2 = new Lista('Juegos que deseo');
    let lista3 = new Lista('Cosas de la universidad');
    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);
    console.log('Servicio Inicializado');
  }
}