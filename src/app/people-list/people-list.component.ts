import {Component, Inject, OnInit} from '@angular/core';
import { IPersonInterface } from '../interfaces/person';
import { IPeopleService } from 'app/services/people.service';
import {PersonDetailsComponent } from 'app/person-details/person-details.component'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.template.html',
  styleUrls: ['./style.scss']
})

export class PeopleListComponent implements OnInit {
  people: IPersonInterface[] = [];
  selectedPerson: IPersonInterface;

  constructor(@Inject('IPeopleService')private _peopleService: IPeopleService ) {
    this.people = _peopleService.getAll();
  }
  ngOnInit() {}
}
