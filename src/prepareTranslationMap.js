import { getMiddleLengthOfObjectValues } from './getMiddleLengthOfObjectValues';

export const prepareTranslationMap = (translations, currentLang, defaultLang) =>
    translations.sort((left, right) => {
        const leftLength = getMiddleLengthOfObjectValues(left);
        const rightLength = getMiddleLengthOfObjectValues(right);

        return leftLength < rightLength ? 1 : (
            leftLength > rightLength ? -1 : 0
        );
    }).reduce(
        (current, transObj) => ({
            ...current,
            [transObj[defaultLang].toLowerCase()]: transObj[currentLang].toLowerCase()
        }),
        {}
    );
