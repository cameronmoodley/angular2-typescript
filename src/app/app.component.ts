import { Component } from '@angular/core';
import { IPeopleService } from 'app/services/people.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ {provide : 'IPeopleService', useClass: IPeopleService} ]
})
export class AppComponent {
  title = 'Star Was Please!!!';
}
