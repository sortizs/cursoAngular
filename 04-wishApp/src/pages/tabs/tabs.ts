import { Component } from '@angular/core';

import { PendientesPage } from '../pendientes/pendientes.page';
import { TerminadosPage } from '../terminados/terminados.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
