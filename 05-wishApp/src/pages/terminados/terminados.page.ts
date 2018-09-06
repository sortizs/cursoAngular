import { Component } from '@angular/core';
import { WishService } from '../../providers/wishes.provider';
import { List } from '../../models/models';

@Component({
  selector: 'page-terminados',
  templateUrl: './terminados.page.html',
})
export class TerminadosPage {
  constructor(public wishServices: WishService) {}

  listSelected(list: List) {
    console.log(list);
  }
}
