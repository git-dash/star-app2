import { Component, OnInit } from '@angular/core';
import { DbFirebaseService } from '../../shared/shared-services/db-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dbService: DbFirebaseService) { }

  ngOnInit() {
  }

  
}
