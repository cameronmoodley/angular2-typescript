import { Injectable } from '@angular/core';
import { IPersonInterface } from 'app/interfaces/person';

@Injectable()
export class IPeopleService implements IPeopleService {

  constructor() { }

  getAll(): IPersonInterface[] {
    return[
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ]
  }
}

export interface IPeopleService {
  name: string;
  weight: number
  height: number;
}
