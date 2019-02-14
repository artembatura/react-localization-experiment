# react-localization-experiment

```jsx harmony
import React from 'react';
import { Localization, setup, l } from 'react-l';

setup([
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
  <Localization fromLang="ru" toLang="en">
    <div>
      <h1>{l`Привет, мир!`}</h1>
      {/* Hello, world! */}
    </div>
  </Localization>
);
```

[CodeSandbox](https://codesandbox.io/s/w7pmpzzpy5)

## Installation

#### NPM

```
npm i react-l
```

#### Yarn

```
yarn add react-l
```

## API

### `setup(translations: Record<string, string>[]) => void`
### `<Localization { fromLang: string, toLang: string, children?: any[] } />`
### `l(sentence: string[] | string) => string[] | string`

### License

`react-localization-experiment` and `react-l` is [MIT licensed](./LICENSE)
