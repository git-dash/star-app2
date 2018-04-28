import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';


import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { HomeComponent } from './home/home.component';
import { CheckInComponent } from './check-in/check-in.component';
import { OutletComponent } from './outlet/outlet.component';
import { MovieComponent } from './movie/movie.component';
import { FoodComponent } from './food/food.component';
import { EventComponent } from './event/event.component';
import { BasicInfoComponent } from './movie/basic-info/basic-info.component';
import { PlayVideoComponent } from './movie/play-video/play-video.component';
import { SafeVideoPipe } from '../shared/filters/safe-video.pipe';



export const routes: Route[] = [
  {
    pathMatch: 'full', path: '',
    redirectTo: 'login'
  },
  {
    path: 'login', component: CheckInComponent

  },
  {
    path: 'home', component: HomeComponent
  },
];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NgQRCodeReaderModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [PlayVideoComponent],
  declarations: [CheckInComponent, HomeComponent, OutletComponent,
    MovieComponent, FoodComponent, EventComponent, BasicInfoComponent, PlayVideoComponent, SafeVideoPipe]
})
export class InStayModule { }
