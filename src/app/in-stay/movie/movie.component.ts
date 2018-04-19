import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/shared-services/movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  sample: Observable<Object>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {


    this.sample = this.movieService.getMovieList();
  }

}
