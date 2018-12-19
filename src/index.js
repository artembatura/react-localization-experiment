import React from 'react';
import { getPositionsOfLowerCaseLetters } from "./getPositionsOfLowerCaseLetters";
import { prepareTranslationMap } from "./prepareTranslationMap";
import { toUpperCaseByPositions } from "./toUpperCaseByPositions";

const { Provider, Consumer } = React.createContext(null);

let __translations = null;

export const Localization = ({ fromLang, toLang, children }) => {
    const transMap = prepareTranslationMap(__translations, toLang, fromLang);
    return <Provider value={transMap} children={children} />;
};

export const setup = translations => {
    __translations = translations;
};

export const l = sentence => {
    if (Array.isArray(sentence)) {
        return sentence.map(l);
    }

    const positionArray = getPositionsOfLowerCaseLetters(sentence);
    let sentenceInLowerCase = sentence.toLowerCase();

    return (
        <Consumer>
            {map => {
                Object.entries(map).forEach(([key, val]) => {
                    sentenceInLowerCase = sentenceInLowerCase.replace(key, val);
                });

                return toUpperCaseByPositions(sentenceInLowerCase, positionArray);
            }}
        </Consumer>
    );
};
