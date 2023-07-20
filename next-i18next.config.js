// next.config.js
const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  en: "en",
  pt: "pt-BR",
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
};
