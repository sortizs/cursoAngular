import { Component } from '@angular/core';
import { WishService } from '../../providers/wishes.provider';
import { List, ListItem } from '../../models/models';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: './agregar.page.html',
})
export class AgregarPage {
  list: List;
  nameItem: string = '';

  constructor(public wishServices: WishService, private navParams: NavParams) {
    const title = navParams.get('title');

    if (navParams.get('list')) {
      this.list = navParams.get('list');
    } else {
      this.list = new List(title);
      wishServices.addlist(this.list);
    }
  }

  listSelected(list: List) {
    console.log(list);
  }

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);

    this.wishServices.saveStorage();

    this.nameItem = '';
  }

  updateItem(item: ListItem) {
    item.completado = !item.completado;

    const pendientes = this.list.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    if (pendientes === 0) {
      this.list.terminada = true;
      this.list.terminadaEn = new Date();
    } else {
      this.list.terminada = false;
      this.list.terminadaEn = null;
    }

    this.wishServices.saveStorage();
  }

  deleteItem(idx: number) {
    this.list.items.splice(idx, 1);

    this.wishServices.saveStorage();
  }
}
