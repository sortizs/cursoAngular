import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../entities/movie';

@Pipe({
  name: 'imgMovie'
})
export class ImgMoviePipe implements PipeTransform {

  transform(movie: MovieModel): string {
    const url = "http://image.tmdb.org/t/p/w500";
    return movie.backdrop_path ? url + movie.backdrop_path : url + movie.poster_path;
  }

}
