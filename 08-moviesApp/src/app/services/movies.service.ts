import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey: string;
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api.themoviedb.org/3';
    this.apiKey = 'e7293a7cae42a4dc159ee84ec44469b4';
  }

  getNowPlaying() {
    let url = `${this.url}/movie/now_playing?api_key=${this.apiKey}&page=1`

    return this.http.get(url)
      .pipe(
        map(data => data['results'])
      );
  }

  getPopular() {
    let url = `${this.url}/discover/movie?api_key=${this.apiKey}`;

    return this.http.get(url)
      .pipe(
        map(data => data['results'])
      );
  }

  getPopularChildren() {
    let url = `${this.url}/discover/movie?api_key=${this.apiKey}&certification_country=US&certification.lte=G`;

    return this.http.get(url)
      .pipe(
        map(data => data['results'])
      );
  }

  searchMovie(query: string) {
    let url = `${this.url}/search/movie?api_key=${this.apiKey}&query=${query}&page=1&include_adult=false`;

    return this.http.get(url)
      .pipe(
        map(data => data['results'])
      );
  }

  movieDetails(movieId: string) {
    let url = `${this.url}/movie/${movieId}?api_key=${this.apiKey}`

    return this.http.get(url);
  }
}
