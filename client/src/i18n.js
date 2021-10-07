function loadLocaleData(locale = 'en') {
  return require(`./lang/${locale}.json`);
}

const locales = {
  en: loadLocaleData('en'),
  vi: loadLocaleData('vi'),
  ja: loadLocaleData('ja')
};

export {
  locales
};
