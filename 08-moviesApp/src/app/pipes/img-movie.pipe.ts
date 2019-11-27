import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../entities/movie';

@Pipe({
  name: 'imgMovie'
})
export class ImgMoviePipe implements PipeTransform {

  transform(movie: MovieModel): string {
    const url = "http://image.tmdb.org/t/p/w500";
    if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else if (movie.poster_path) {
      return url + movie.poster_path;
    } else {
      return '/assets/inf.png';
    }
  }

}
