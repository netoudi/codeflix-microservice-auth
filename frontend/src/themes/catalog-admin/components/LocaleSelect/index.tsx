import React from 'react';
import { Select, SelectProps } from '@material-ui/core';

export interface LocaleSelectProps extends SelectProps {
  locales: {
    url: string;
    label: string;
  }[];
}

const LocaleSelect: React.FunctionComponent<LocaleSelectProps> = (props) => {
  const { locales, ...selectProps } = props;

  const handleSelectChange = (event: any) => {
    console.log(event);
    const locale = locales.find((l) => event.target.value === l.label);
    window.location.href = locale!.url;
  };

  return (
    <Select native {...selectProps} onChange={handleSelectChange}>
      {locales.map((locale, key) => (
        <option value={locale.label} key={key}>
          {locale.label}
        </option>
      ))}
    </Select>
  );
};

export default LocaleSelect;
