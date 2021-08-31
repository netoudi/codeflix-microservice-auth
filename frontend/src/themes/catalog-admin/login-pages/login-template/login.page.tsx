import React from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  MuiThemeProvider,
  TextField,
} from '@material-ui/core';

import reportWebVitals from '../../../../reportWebVitals';
import theme from '../../../../theme';
import Layout, { LayoutProps } from '../../components/Layout';

declare const layoutProps: LayoutProps;
declare const pageProps: LoginPageProps;

export interface LoginPageProps {
  loginEnabled: boolean;
  loginAction: string;
  usernameEditDisabled: boolean;
  usernameLabel: string;
  usernameValue: string;
  passwordLabel: string;
  enabledRememberMe: boolean;
  enableLoginRememberMe: boolean;
  rememberMeLabel: string;
  resetPasswordAllowed: boolean;
  resetPasswordUrl: string;
  resetPasswordLabel: string;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const {
    loginEnabled,
    loginAction,
    usernameEditDisabled,
    usernameLabel,
    usernameValue,
    passwordLabel,
    enabledRememberMe,
    enableLoginRememberMe,
    rememberMeLabel,
    resetPasswordAllowed,
    resetPasswordUrl,
    resetPasswordLabel,
  } = props;

  if (!loginEnabled) {
    return <p>Login não habilitado, contactar o administrador.</p>;
  }

  return (
    <Box padding={2}>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item>
          <form action={loginAction} method="post">
            <TextField
              id="username"
              name="username"
              label={usernameLabel}
              fullWidth
              variant="outlined"
              defaultValue={usernameValue}
              autoFocus
              autoComplete="off"
              disabled={usernameEditDisabled}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label={passwordLabel}
              fullWidth
              variant="outlined"
              autoFocus
              autoComplete="off"
              margin="normal"
            />
            <div>
              <div>
                {enabledRememberMe && !usernameEditDisabled && (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={enableLoginRememberMe}
                      />
                    }
                    label={rememberMeLabel}
                  />
                )}
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
        <LoginPage {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
