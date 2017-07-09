import {Component, Inject, OnInit} from '@angular/core';
import { IPersonInterface } from '../interfaces/person';
import { IPeopleService } from 'app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.template.html',
  styleUrls: ['./people-list.component.scss']
})

export class PeopleListComponent implements OnInit {
  people: IPersonInterface[] = [];

  constructor(@Inject('IPeopleService')private _peopleService: IPeopleService ) {
    this.people = _peopleService.getAll();
  }
  ngOnInit() {}
}
