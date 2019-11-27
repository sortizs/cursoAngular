import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(private _ms: MoviesService,
    private _r: Router,
    private _ar: ActivatedRoute) { }

  ngOnInit() {
    this._ar.params.subscribe( parameters => {
      if (parameters['query']) {
        this.search = parameters['query'];
        this.searchMovie();
      }
    })
  }

  searchMovie() {
    if (this.search.length == 0) { return; }

    this._ms.searchMovie(this.search).subscribe();
  }

  seeMore(id: string) {
    this._r.navigate(['movie', id]);
  }

}
