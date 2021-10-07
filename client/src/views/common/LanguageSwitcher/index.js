import React from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { LanguageContext } from 'views/context';

export default function LanguageSwitcher({ id, ...props }) {
  const options =  [
    {
      label: `${getUnicodeFlagIcon('US')} English`,
      value: 'en'
    },
    {
      label: `${getUnicodeFlagIcon('VN')} Vietnamese`,
      value: 'vi'
    },
    {
      label: `${getUnicodeFlagIcon('JP')} Japanese`,
      value: 'ja'
    }
  ];

  const { locale, onChangeLocale} = React.useContext(LanguageContext);

  function handleChange(e) {
    onChangeLocale(e.target.value);
  }

  return (
    <select
      id={id || 'language'}
      onChange={handleChange}
      value={locale}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value || option} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  );
}
