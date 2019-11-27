import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movieId: string;
  movie: any;

  constructor(private _r: ActivatedRoute, private _ms: MoviesService) {  }

  ngOnInit() {
    this.movieId = this._r.snapshot.paramMap.get('id');
    this._ms.movieDetails(this.movieId).subscribe(data => this.movie = data);
  }

  posterImg(): string {
    if (this.movie.poster_path) {
      return 'http://image.tmdb.org/t/p/w300' + this.movie.poster_path;
    } else {
      return '/assets/inf.png';
    }
  }

}
