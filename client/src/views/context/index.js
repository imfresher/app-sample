import { createContext } from 'react';

export const LanguageContext = createContext({
  locale: 'en',
  onChangeLocale: () => {},
});
