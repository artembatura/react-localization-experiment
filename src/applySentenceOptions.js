import { toUpperCaseByPositions } from './toUpperCaseByPositions';
import { WORD_OPTIONS } from './WORD_OPTIONS';

export const applySentenceOptions = (sentence, options) => (
    sentence.split(' ').map((word, order) => {
        switch (options[order].wordCase) {
            case WORD_OPTIONS.CASE.UPPER_CASE:
                return word.toUpperCase();

            case WORD_OPTIONS.CASE.CAPITAL_LETTER:
                return toUpperCaseByPositions(word, [0]);

            default:
                return word;
        }
    }).join(' ')
);
