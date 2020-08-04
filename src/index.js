import { setDictionary, getDictionary } from "./dictionary";

export { translate } from "./translate"
export * from "./react";

export function addDictionary(dictionary) {
  setDictionary([
    ...getDictionary(),
    ...dictionary
  ]);
}
