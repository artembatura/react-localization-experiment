import { isUpperCase } from './utils/isUpperCase';
import { isLowerCase } from './utils/isLowerCase';
import { hasCapitalLetter } from './utils/hasCapitalLetter';
import { WORD_META } from './WORD_META';

export function getWordsMeta(wordsList) {
  return wordsList.map(
    word => ({
      wordCase: isUpperCase(word) ? WORD_META.CASE.UPPER_CASE : (
        isLowerCase(word) ? WORD_META.CASE.LOWER_CASE : (
          hasCapitalLetter(word) ? WORD_META.CASE.CAPITAL_LETTER
            : undefined
        )
      )
    })
  );
}
