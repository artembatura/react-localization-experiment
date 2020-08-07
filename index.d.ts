import { FC } from 'react';

export declare function addDictionary(
  translations: Array<{ [lang: string]: string }>
): void;

export declare function translate(
  text: string,
  fromLang: string,
  toLang: string
): string;

export declare const LocaleProvider: FC<{
  srcLocale: string;
  locale: string;
  children?: any[];
}>;

export declare const L: FC<{
  children?: string;
  from?: string;
  to?: string;
}>;
