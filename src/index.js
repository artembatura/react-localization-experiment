import React from 'react';
import { getPositionsOfLowerCaseLetters } from "./getPositionsOfLowerCaseLetters";
import { prepareTranslationMap } from "./prepareTranslationMap";
import { toLowerCaseByIndex } from "./toLowerCaseByIndex";

const { Provider, Consumer } = React.createContext(null);

let __translations = null;

export const Localization = ({ fromLang, toLang, children }) => {
    const transMap = prepareTranslationMap(__translations, toLang, fromLang);
    return <Provider value={transMap} children={children}/>;
};

export const setup = translations => {
    __translations = translations;
};

export const l = sentence => {
    if (Array.isArray(sentence)) {
        return sentence.map(l);
    }

    const positionArray = getPositionsOfLowerCaseLetters(sentence);
    let lowerSentence = sentence.toLowerCase();

    return (
        <Consumer>
            {map => {
                Object.entries(map).forEach(([key, val]) => {
                    lowerSentence = lowerSentence.replace(key, val);
                });

                return toLowerCaseByIndex(lowerSentence, positionArray);
            }}
        </Consumer>
    );
};
