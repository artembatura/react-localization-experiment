import { toUpperCaseByPositions } from './utils/toUpperCaseByPositions';
import { WORD_META } from './WORD_META';

export function applyWordsMeta(string, meta) {
  return string.map((word, order) => {
    switch (meta[order].wordCase) {
      case WORD_META.CASE.UPPER_CASE:
        return word.toUpperCase();

      case WORD_META.CASE.CAPITAL_LETTER:
        return toUpperCaseByPositions(word, [0]);

      default:
        return word;
    }
  });
}
