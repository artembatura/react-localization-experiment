export const getMiddleLengthOfObjectValues = object => Object.values(object).reduce(
    (length, sentence) => length + sentence.length,
    0
) / Object.keys(object).length;
