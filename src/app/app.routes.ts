// angular imports
import { Routes, RouterModule } from '@angular/router';

// app specific imports
import { PeopleListComponent } from 'app/people-list/people-list.component'
import { PersonDetailsComponent } from 'app/person-details/person-details.component';

const routes =[
  {
    path: 'persons',
    component: PeopleListComponent
  },
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  }
];

export const appRouterModule = RouterModule.forRoot(routes);
