import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '../constants/local-storage-keys';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getTriviaAnswers() {
    const heroNames: string[] = JSON.parse(
      localStorage.getItem(LocalStorageKeys.TRIVIA_ANSWERS) ?? '[]'
    );

    return heroNames;
  }

  pushTriviaAnswer(answer: Hero) {
    const answers = this.getTriviaAnswers();

    answers.push(answer.name);

    localStorage.setItem(
      LocalStorageKeys.TRIVIA_ANSWERS,
      JSON.stringify(answers)
    );
  }
}
