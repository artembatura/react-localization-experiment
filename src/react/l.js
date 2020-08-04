import React, { useContext } from "react";
import { translate } from "../translate";
import { LangContext } from "./LangContext";

export function L({ children: text, from, to }) {
  const { srcLocale, locale } = useContext(LangContext);

  return translate(text, from || srcLocale, to || locale);
}