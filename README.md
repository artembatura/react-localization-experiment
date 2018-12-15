# react-l

Easy to localize your React applications

### Example ([sandbox](https://codesandbox.io/s/w7pmpzzpy5))

```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';
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
  <Localization fromLang="en" toLang="ru">
    <div>
      <h1>{l`Hello world`}</h1>
    </div>
  </Localization>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
