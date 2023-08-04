import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationData from "../public/locales/translation.json";

i18n.use(initReactI18next).init({
  lng: "en", // Set the default language here
  fallbackLng: "en", // Set the fallback language here
  debug: false, // Set this to true to see console messages for debugging
  resources: {
    en: {
      translation: translationData.en, // 'translation' is the custom namespace, using 'translation.json' for English
    },
    "pt-BR": {
      translation: translationData.pt_BR, // 'translation' is the custom namespace, using 'translation.json' for French (update with appropriate data)
      // Add more languages and their namespaces here if needed
    },
  },
  defaultNS: "translation", // Set the default namespace to 'translation'
});

export default i18n;
