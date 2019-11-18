import { Component } from '@angular/core';
import { WishService } from '../../providers/wishes.provider';
import { List } from '../../models/models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.page';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-pendientes',
  templateUrl: './pendientes.page.html',
})
export class PendientesPage {
  constructor(
    public wishServices: WishService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
  ) {}

  addList() {
    const prompt = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la lista a crear',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Agregar',
          handler: data => {
            if (data.title.lenght === 0) {
              return;
            }

            this.navCtrl.push(AgregarPage, {
              title: data.title,
            });
          },
        },
      ],
    });

    prompt.present();
  }
}
