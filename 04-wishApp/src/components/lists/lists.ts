import { Component, Input } from '@angular/core';
import { WishService } from '../../providers/wishes.provider';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../../pages/agregar/agregar.page';
import { List } from '../../models/models';

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.html',
})
export class ListsComponent {
  @Input()
  completed: boolean = false;

  constructor(
    public wishServices: WishService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) {}

  listSelected(list: List) {
    this.navCtrl.push(AgregarPage, {
      titulo: list.titulo,
      list: list,
    });
  }

  deleteList(list: List) {
    this.wishServices.deleteStorage(list);
  }

  editList(list: List, slidingItem: ItemSliding) {

    slidingItem.close();

    const prompt = this.alertCtrl.create({
      title: 'Editar nombre',
      message: 'Editar nombre de la lista',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nombre de la lista',
          value: list.titulo
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            if (data.title.lenght === 0) {
              return;
            }

            list.titulo = data.title;
            this.wishServices.saveStorage();
          },
        },
      ],
    });

    prompt.present();
  }
}
