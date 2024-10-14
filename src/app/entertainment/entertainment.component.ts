import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  topHeadingDisplay:any = [];

  constructor (private _services:NewsapiservicesService) {

    this._services.entertainmentHeading().subscribe((result) => {
      console.log(result.articles);
      this.topHeadingDisplay = result.articles
    });

  }
}
