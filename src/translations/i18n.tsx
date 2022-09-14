import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import common_pt from './pt.json';
import common_en from './en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: {
      en: {
        common: common_en
      },
      pt: {
        common: common_pt
      },
    }
  });

export default i18n;