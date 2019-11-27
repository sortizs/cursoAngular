import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nowPlaying: any;
  populars: any;

  constructor(public _ms: MoviesService) {
    this._ms.getNowPlaying().subscribe(data => this.nowPlaying = data);

    this._ms.getPopularChildren().subscribe(data => this.populars = data);
  }

  ngOnInit() { }

}
