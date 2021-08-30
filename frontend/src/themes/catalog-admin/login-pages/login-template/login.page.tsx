import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import reportWebVitals from '../../../../reportWebVitals';
import theme from '../../../../theme';
import Layout from '../../components/Layout';

declare const obj: {
  loginTitle: string;
  i18nEnabled: boolean;
  locale?: {
    currentLocale: string;
    locales: {
      label: string;
      url: string;
    };
  }[];
};

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout {...obj}>Login</Layout>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
