import {Component, Input, OnInit} from '@angular/core';
import { IPersonInterface } from '../interfaces/person';
import { ActivatedRoute } from '@angular/router';
import { IPeopleService } from 'app/services/people.service';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.template.html',
  styleUrls: ['./style.scss']
})

export class PersonDetailsComponent implements OnInit {

  @Input() selectedPerson: IPersonInterface;
  constructor(
  private peopleService: IPeopleService,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.IPeopleService = this.peopleService.get(id);
    });
  }

}
