import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MovieService } from '../../../shared/shared-services/movie.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  @Input() shortMovie: any;

  sample$: any;
  constructor(private movieService: MovieService) { }
  ngOnInit(): void {
    //  throw new Error("Method not implemented.");
    console.log('came in basic info card');

    this.sample$ =
      this.movieService.getMovieDetails(this.shortMovie.id)
        .do(data => {
          console.log(data);

        });

  }


  getMovieDetails(movieId) {

    // console.log(this.movieService.getMovieDetails(movieId));
    this.sample$ =
      this.movieService.getMovieDetails(movieId)
      ;


  }
}
