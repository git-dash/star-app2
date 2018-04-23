import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MovieService } from '../../../shared/shared-services/movie.service';
import { MatDialog } from '@angular/material';
import { PlayVideoComponent } from '../play-video/play-video.component';
import { Video } from '../../../entity/movie';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  @Input() shortMovie: any;

  sample$: any;
  constructor(private movieService: MovieService, private dialog: MatDialog) { }
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
  openVideoModal(id, title, releaseDate, videoList) {
    console.log(id, title, releaseDate, JSON.stringify(videoList));


    const vid =
      videoList.map(el => {
        return new Video(el.type, el.size, el.name, el.key);
      });


    let dialogRef = this.dialog.open(PlayVideoComponent, {
      // width: '100%',
      height: '250px',
      data: { title: title, videos: vid, releaseDate: releaseDate.split('-')[0] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
}
