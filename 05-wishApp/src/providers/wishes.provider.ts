import { Injectable } from '@angular/core';
import { List } from '../models/models';

@Injectable()
export class WishService {
  lists: List[] = [];

  constructor() {
    this.loadStorage();
  }

  addlist(list: List) {
    this.lists.push(list);
    this.saveStorage();
  }

  deleteStorage(list: List) {
    this.lists = this.lists.filter(listData => {
      return listData.id !== list.id;
    });

    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
}
