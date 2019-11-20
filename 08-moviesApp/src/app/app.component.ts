import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _ms: MoviesService) {
    // _ms.getPopular().subscribe(data => console.log(data));
    // _ms.searchMovie('interstellar').subscribe(data => console.log(data));
    // _ms.movieDetails('157336').subscribe(data => console.log(data));
  }

}
