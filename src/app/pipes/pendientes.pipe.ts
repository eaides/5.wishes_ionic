import {Pipe, PipeTransform} from '@angular/core';
import { Lista } from '../classes/index';
@Pipe({
  name: 'pendientes',
  pure: false,
})

export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], estado: boolean = false): Lista[] {
    console.log(listas);
    let nuevaLista: Lista[] = [];
    let full_idx = -1;
    for (let lista of listas) {
      full_idx++;
      if (lista.terminado == estado) {
        lista.idx_from_full = full_idx;
        nuevaLista.push(lista);
      }
    }
    console.log(nuevaLista);
    return nuevaLista;
  }
}