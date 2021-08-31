import React from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  MuiThemeProvider,
  TextField,
} from '@material-ui/core';

import reportWebVitals from '../../../../reportWebVitals';
import theme from '../../../../theme';
import Layout, { LayoutProps } from '../../components/Layout';

declare const layoutProps: LayoutProps;

export interface LoginPageProps {
  //
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  return (
    <Box padding={2}>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item>
          <form action="" method="post">
            <TextField
              id="username"
              name="username"
              fullWidth
              variant="outlined"
              autoFocus
              autoComplete="off"
            />
            <TextField
              id="password"
              name="password"
              type="password"
              fullWidth
              variant="outlined"
              autoFocus
              autoComplete="off"
              margin="normal"
            />
            <div>
              <div>
                <input type="checkbox" />
                <Link href="#" color="secondary">
                  &nbsp;
                </Link>
              </div>
            </div>
            <Grid container>
              <Grid item xs={7}>
                <div>
                  <Link href="#" color="secondary">
                    &nbsp;
                  </Link>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <input type="hidden" id="id-hidden-input" name="credentialId" />
              <Button type="submit" color="secondary" variant="contained">
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout {...layoutProps}>
        <LoginPage />
      </Layout>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
