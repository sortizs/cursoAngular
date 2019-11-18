import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://heroes-app-88807.firebaseio.com';

  constructor(private http: HttpClient) { }

  createHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      );
  }

  updateHeroe(heroe: HeroeModel) {
    const heroeTmp = {
      ...heroe
    };
    delete heroeTmp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTmp);
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map(this.createArray),
        delay(1500)
      );
  }

  private createArray( heroesObj: object) {
    const heroes: HeroeModel[] = [];

    if (heroesObj === null) { return []; }

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    })

    return heroes;

  }

  deleteHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
}
