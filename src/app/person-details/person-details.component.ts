import {Component, Input, OnInit} from '@angular/core';
import { IPersonInterface } from '../interfaces/person';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.template.html',
  styleUrls: ['./style.scss']
})
export class PersonDetailsComponent implements OnInit {

  @Input() selectedPerson: IPersonInterface;
  constructor() { }

  ngOnInit() {
  }

}
