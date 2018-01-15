import {Component, OnInit} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _listaDeseos: ListaDeseosService
  ) {
    this.idx = this.navParams.get('idx');
    this.lista = this.navParams.get('lista');
  }

  ngOnInit() {
  }

  actualizar(item: ListaItem) {
    item.completado = !item.completado;

    let allMarks = true;
    for(let item of this.lista.items) {
      if (!item.completado) {
        allMarks = false;
        break;
      }
    }
    this.lista.terminado = allMarks;
    this._listaDeseos.actualizarDataToLS()
  }

  borrarItem() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Realmente quieres borrar la lista ?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}