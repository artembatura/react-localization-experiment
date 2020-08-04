import { getMiddleLengthOfObjectValues } from './utils/getMiddleLengthOfObjectValues';

export function mapDictionary(dictionary, fromLang, toLang) {
  return dictionary.sort((left, right) => {
    const leftLength = getMiddleLengthOfObjectValues(left);
    const rightLength = getMiddleLengthOfObjectValues(right);

    return leftLength < rightLength ? 1 : (
      leftLength > rightLength ? -1 : 0
    );
  }).reduce(
    (current, transObj) => ({
      ...current,
      [transObj[fromLang].toLowerCase()]: transObj[toLang].toLowerCase()
    }),
    {}
  );
}
