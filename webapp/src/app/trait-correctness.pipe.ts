import { Pipe, PipeTransform } from '@angular/core';

import { AnswerCorrectness } from '../interfaces/enums/answer-correctness';

@Pipe({
  name: 'traitCorrectness',
  standalone: true,
})
export class TraitCorrectnessPipe implements PipeTransform {
  transform(
    guessedHeroTraits: string[],
    correctHeroTraits: string[]
  ): AnswerCorrectness {
    const filteredArray = guessedHeroTraits.filter((value) =>
      correctHeroTraits.includes(value)
    );

    if (filteredArray.length === guessedHeroTraits.length) {
      return AnswerCorrectness.CORRECT;
    } else if (filteredArray.length == 0) {
      return AnswerCorrectness.INCORRECT;
    } else {
      return AnswerCorrectness.PARTIALLY_CORRECT;
    }
  }
}
