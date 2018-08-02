import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number;
  author: string;

  constructor() {
    this.anio = new Date().getFullYear();
    this.author = 'Sebastian Ortiz';
  }

}
