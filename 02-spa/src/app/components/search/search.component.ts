import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
