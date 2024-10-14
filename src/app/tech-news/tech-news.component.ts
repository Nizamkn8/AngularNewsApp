import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {
  topHeadingDisplay:any = [];

  constructor (private _services:NewsapiservicesService) {

    this._services.techHeading().subscribe((result) => {
      console.log(result.articles);
      this.topHeadingDisplay = result.articles
    });

  }
}
