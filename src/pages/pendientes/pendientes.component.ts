import { Component, OnInit} from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista, ListaItem } from '../../app/classes/index';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
  constructor( private _listaDeseos: ListaDeseosService,
               private _navCtrl: NavController ) {
  }

  ngOnInit() {
  }

  irAgregar() {
    this._navCtrl.push(AgregarComponent);
  }

  verDetalle(lista:Lista, idx:number, idx_from_full:number) {
    if (idx_from_full >= 0) {
      idx = idx_from_full;
    }
    this._navCtrl.push(DetalleComponent, { lista,idx })
  }
}