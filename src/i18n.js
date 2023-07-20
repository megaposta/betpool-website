// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../public/locales/en.json";
import ptBRTranslation from "../public/locales/pt-BR.json";

const resources = {
  en: { translation: enTranslation },
  "pt-BR": { translation: ptBRTranslation },
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
