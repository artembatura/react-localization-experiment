const getMiddleLengthOfObjectValues = object => Object.values(object).reduce(
    (length, sentence) => length + sentence.length,
    0
) / Object.keys(object).length;

export const prepareTranslationMap = (translations, currentLang, defaultLang) =>
    translations.sort((left, right) => {
        const leftLength = getMiddleLengthOfObjectValues(left);
        const rightLength = getMiddleLengthOfObjectValues(right);

        if (leftLength < rightLength) {
            return 1;
        } else if (leftLength > rightLength) {
            return -1;
        } else {
            return 0;
        }
    }).reduce(
        (current, transObj) => ({
            ...current,
            [transObj[defaultLang].toLowerCase()]: transObj[currentLang].toLowerCase()
        }),
        {}
    );
