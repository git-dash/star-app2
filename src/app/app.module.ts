import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/shared-material/shared-material.module';
import { SharedServicesModule } from './shared/shared-services/shared-services.module';


export const routes: Route[] = [
  {
    path: '', redirectTo: 'check-in', pathMatch: 'full'
  },
  {
    path: 'check-in',
    // loadChildren: './in-stay/in-stay.module#InStayModule'
    loadChildren: './in-stay/in-stay.module#InStayModule'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    SharedServicesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
