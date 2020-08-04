import { mapDictionary } from "./mapDictionary";
import { getWordsMeta } from "./getWordsMeta";
import { applyWordsMeta } from "./applyWordsMeta";
import { getDictionary } from "./dictionary";

export function translate(text, fromLang, toLang) {
  if (Array.isArray(text)) {
    return text.map(translate);
  }

  const mappedDictionary = mapDictionary(getDictionary(), fromLang, toLang);
  const dictEntries = Object.entries(mappedDictionary);

  let tempText = text.toLowerCase();

  dictEntries.forEach(([from, to]) => {
    tempText = tempText.replace(new RegExp(from, 'g'), to);
  });

  const tempWords = tempText.split(' ');
  const wordsMeta = getWordsMeta(text.split(' '));

  return applyWordsMeta(tempWords, wordsMeta).join(" ");
}