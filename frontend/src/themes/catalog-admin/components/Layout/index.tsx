import React from 'react';
import { Typography } from '@material-ui/core';

export interface LayoutProps {
  loginTitle: string;
  i18nEnabled: boolean;
  locale?: {
    currentLocale: string;
    locales: {
      label: string;
      url: string;
    };
  }[];
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return <Typography component="h2">{props.loginTitle}</Typography>;
};

export default Layout;
