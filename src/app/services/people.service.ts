import { Injectable } from '@angular/core';
import { IPersonInterface } from 'app/interfaces/person';

@Injectable()
export class IPeopleService implements IPeopleService {

  constructor() { }

  getAll(): IPersonInterface[] {
    return[
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ]
  }
}

export interface IPeopleService {
  id: number;
  name: string;
  weight: number
  height: number;
}
