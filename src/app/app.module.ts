import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouterModule } from 'app/app.routes';


import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
