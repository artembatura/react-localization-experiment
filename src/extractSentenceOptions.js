import { isUpperCase } from './isUpperCase';
import { isLowerCase } from './isLowerCase';
import { hasCapitalLetter } from './hasCapitalLetter';
import { WORD_OPTIONS } from './WORD_OPTIONS';

export const extractSentenceOptions = sentence => sentence.split(' ').map(
    word => ({
        wordCase: isUpperCase(word) ? WORD_OPTIONS.CASE.UPPER_CASE : (
            isLowerCase(word) ? WORD_OPTIONS.CASE.LOWER_CASE : (
                hasCapitalLetter(word) ? WORD_OPTIONS.CASE.CAPITAL_LETTER
                    : undefined
            )
        )
    })
);
