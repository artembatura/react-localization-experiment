import React from "react";
import { LangContext } from "./LangContext";

export function LocaleProvider({ children, locale, srcLocale }) {
  return (
    <LangContext.Provider value={{
      locale,
      srcLocale
    }}>
      {children}
    </LangContext.Provider>
  );
}