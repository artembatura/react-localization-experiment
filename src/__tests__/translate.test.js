import { addDictionary, translate } from "..";

describe("translate", () => {
  beforeAll(() => {
    addDictionary([
      { en: "hello", ru: "привет" },
      { en: "world", ru: "мир" }
    ]);
  });

  it("default", () => {
    expect(translate("Привет, мир!", "ru", "en"))
      .toBe("Hello, world!");

    expect(translate("Hello, world!", "en", "ru"))
      .toBe("Привет, мир!");
  });

  it("duplicates", () => {
    expect(translate("Hello, world! Hello, world!", "en", "ru"))
      .toBe("Привет, мир! Привет, мир!");

    expect(translate("Привет, мир! Привет, мир!", "ru", "en"))
      .toBe("Hello, world! Hello, world!");
  })
});