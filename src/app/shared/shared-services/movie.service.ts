import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  /*

    1. https://codecraft.tv/courses/angular/http/http-with-observables/ - async pipe
    2. https://image.tmdb.org/t/p/original/2RDUQpzhJHVzObkL4ZxwJkbKYSz.jpg - image
    3. themoviedb - https://www.themoviedb.org/settings/api
    4. example - https://api.themoviedb.org/3/search/movie?api_key=b12176cbe4608313502b204789b0dbb8&query=the+avengers
   */

  getMovieList() {
    const apiURL =
      `${environment.movie.baseWithApiKey}`;

    return this.httpClient.get(
      apiURL)
      .map(resp => resp);
  }
}
