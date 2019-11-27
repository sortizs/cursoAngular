import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {

  @Input('movies') movies;
  @Input('title') title;
  @Input('id') id;

  constructor() { }

  ngOnInit() {
  }

}
