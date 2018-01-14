import { Component, OnInit} from '@angular/core';
import { ListaDeseosServiceService } from '../../app/services/lista-deseos.service';

import { AgregarComponent } from '../agregar/agregar.component';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
  constructor( private _listaDeseos: ListaDeseosServiceService,
               private _navCtrl: NavController ) {
  }

  ngOnInit() {
  }

  irAgregar() {
    this._navCtrl.push(AgregarComponent);
  }
}