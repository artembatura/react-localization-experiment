# react-localization-experiment

```jsx harmony
import React from 'react';

import { addDictionary, LocaleProvider, L } from 'react-localization-experiment';

addDictionary([
  {
    en: "hello",
    ru: "привет"
  },
  {
    en: "world",
    ru: "мир"
  }
]);

const App = () => (
  <LocaleProvider srcLocale="en" locale="ru">
    <div>
      <L>Hello, world!</L>
      {/* Привет, мир! */}

      <L from="ru" to="en">Привет, мир!</L>
      {/* Hello, world! */}
    </div>
  </LocaleProvider>
);
```

[CodeSandbox](https://codesandbox.io/s/w7pmpzzpy5)

## Installation

### npm

```
npm i react-localization-experiment
```

### Yarn

```
yarn add react-localization-experiment
```

## API

```typescript
declare function addDictionary(
  translations: Array<{ [lang: string]: string }>
): void;

declare function translate(
  text: string,
  fromLang: string,
  toLang: string
): string;

declare const LocaleProvider: React.FC<{
  srcLocale: string;
  locale: string;
  children?: any[];
}>;

declare const L: React.FC<{
  children: string;
  from: string;
  to: string;
}>;
```

### License

`react-localization-experiment` is [MIT licensed](./LICENSE)
