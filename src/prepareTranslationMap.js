export const prepareTranslationMap = (translations, currentLang, defaultLang) =>
    translations.reduce(
        (current, transObj) => ({
            ...current,
            [transObj[defaultLang].toLowerCase()]: transObj[currentLang].toLowerCase()
        }),
        {}
    );
