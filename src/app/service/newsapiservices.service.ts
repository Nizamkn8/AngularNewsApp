import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http :HttpClient) {  }

  private general = 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'; // Change this URL as per your requirement

  private entertainment = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'; // Change this URL as per your requirement

  private health = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'; // Change this URL as per your requirement

  private sports = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'; // Change this URL as per your requirement

  private tech = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'; // Change this URL as per your requirement

  topHeading():Observable<any>{
    return this._http.get(`${this.general}`);
  }

  healthHeading():Observable<any>{
    return this._http.get(`${this.health}`);
  }

  entertainmentHeading():Observable<any>{
    return this._http.get(`${this.entertainment}`);
  }

  sportsHeading():Observable<any>{
    return this._http.get(`${this.sports}`);
  }

  techHeading():Observable<any>{
    return this._http.get(`${this.tech}`);
  }

}
