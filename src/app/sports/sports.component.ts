import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  topHeadingDisplay:any = [];

  constructor (private _services:NewsapiservicesService) {

    this._services.sportsHeading().subscribe((result) => {
      console.log(result.articles);
      this.topHeadingDisplay = result.articles
    });

  }
}
