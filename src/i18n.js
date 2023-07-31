// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationFile from "../public/locales/translations.json";

const resources = {
  en: { translation: TranslationFile.en },
  "pt-BR": { translation: TranslationFile["pt_BR"] },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
