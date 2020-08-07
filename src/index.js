import { setDictionary, getDictionary } from "./dictionary";

export * from "./translate";
export * from "./react";

export function addDictionary(dictionary) {
  setDictionary([
    ...getDictionary(),
    ...dictionary
  ]);
}
