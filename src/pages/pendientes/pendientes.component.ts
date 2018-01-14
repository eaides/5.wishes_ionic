import {Component, OnInit} from '@angular/core';
import { ListaDeseosServiceService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
  constructor( private _listaDeseos: ListaDeseosServiceService ) {
  }

  ngOnInit() {
  }
}