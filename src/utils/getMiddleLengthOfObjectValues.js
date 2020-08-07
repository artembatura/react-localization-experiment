export function getMiddleLengthOfObjectValues(object) {
  return Object.values(object).reduce(
    (length, sentence) => length + sentence.length,
    0
  ) / Object.keys(object).length;
}
