import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseCourseComponent } from './choose-course/choose-course.component';
import { AddPlayersComponent } from './add-players/add-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseCourseComponent,
    AddPlayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
