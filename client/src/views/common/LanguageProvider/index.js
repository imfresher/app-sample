import React from  'react';
import { IntlProvider } from 'react-intl';
import config from 'config';
import { LanguageContext } from 'views/context';

const defaultLocale = config.locale;

function LanguageProvider(props) {
  const [locale, setLocale] = React.useState(defaultLocale);

  function handleLocaleChange(value) {
    setLocale(value);
  };

  return (
    <LanguageContext.Provider value={{
      locale,
      onChangeLocale: handleLocaleChange
    }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={props.messages[locale]}
      >
        { props.children }
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
