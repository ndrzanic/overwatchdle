import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HeroName } from '../constants/hero-names';
import { environment } from '../environments/environment';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getTriviaHero() {
    return this.httpClient.get<{
      correctHero: string;
      heroList: Record<HeroName, Hero>;
    }>(this.baseUrl + '/trivia-hero');
  }
}
