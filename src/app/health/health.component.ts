import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  topHeadingDisplay:any = [];

  constructor (private _services:NewsapiservicesService) {

    this._services.healthHeading().subscribe((result) => {
      console.log(result.articles);
      this.topHeadingDisplay = result.articles
    });

  }
}
