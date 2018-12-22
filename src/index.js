import React from 'react';
import { prepareTranslationMap } from './prepareTranslationMap';
import { extractSentenceOptions } from './extractSentenceOptions';
import { applySentenceOptions } from './applySentenceOptions';

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

    const sentenceOptions = extractSentenceOptions(sentence);
    let sentenceInLowerCase = sentence.toLowerCase();

    return (
        <Consumer>
            {map => {
                Object.entries(map).forEach(([ key, val ]) => {
                    sentenceInLowerCase = sentenceInLowerCase.replace(key, val);
                });

                return applySentenceOptions(sentenceInLowerCase, sentenceOptions);
            }}
        </Consumer>
    );
};
