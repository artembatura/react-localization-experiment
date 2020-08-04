import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { addDictionary, LocaleProvider, L } from "../..";

describe('basic', () => {
  beforeAll(() => {
    addDictionary([
      { en: "hello", ru: "привет" },
      { en: "world", ru: "мир" }
    ]);
  });

  it('default', () => {
    render(
      <LocaleProvider srcLocale="en" locale="ru">
        <L>Hello, world!</L>
      </LocaleProvider>
    );

    expect(screen.queryByText("Hello, world!")).toBeNull();
    expect(screen.queryByText("Привет, мир!")).not.toBeNull();
  });

  it('custom language', () => {
    render(
      <LocaleProvider srcLocale="ru" locale="en">
        <L from="ru" to="en">Привет, мир!</L>
      </LocaleProvider>
    );

    expect(screen.queryByText("Привет, мир!")).toBeNull();
    expect(screen.queryByText("Hello, world!")).not.toBeNull();
  });

  it('duplicates', () => {
    render(
      <LocaleProvider srcLocale="en" locale="ru">
        <L>Hello, world! Hello, world!</L>
      </LocaleProvider>
    );

    expect(screen.queryByText("Hello, world! Hello, world!")).toBeNull();
    expect(screen.queryByText("Привет, мир! Привет, мир!")).not.toBeNull();
  });
});