import { Component } from 'react';

export declare const setup: (translations: Record<string, string>[]) => void;
export declare const l: <T extends string[] | string>(sentence: T) => T;
export declare const Localization: Component<{ fromLang: string, toLang: string, children?: any[] }>;
