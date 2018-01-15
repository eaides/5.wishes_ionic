import {Injectable} from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarDataFromLS();
  }

  actualizarDataToLS() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarDataFromLS() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
    // else the listas is ok as empty array
  }

  agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.actualizarDataToLS();
  }

  eliminarLista(idx: number) {
    this.listas.splice(idx,1);
    this.actualizarDataToLS();
  }
}