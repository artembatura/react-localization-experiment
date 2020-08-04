import { FC } from 'react';

declare function addDictionary(
  translations: Array<{ [lang: string]: string }>
): void;

declare function translate(
  text: string,
  fromLang: string,
  toLang: string
): string;

declare const LocaleProvider: FC<{
  srcLocale: string;
  locale: string;
  children?: any[];
}>;

declare const L: FC<{
  children?: string;
  from?: string;
  to?: string;
}>;
