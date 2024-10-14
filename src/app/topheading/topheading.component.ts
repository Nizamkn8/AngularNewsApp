import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent {

  topHeadingDisplay:any = [];

  constructor (private _services:NewsapiservicesService) {

    this._services.topHeading().subscribe((result) => {
      console.log(result.articles);
      this.topHeadingDisplay = result.articles
    });

  }
}
