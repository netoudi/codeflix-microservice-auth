import React from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MuiThemeProvider,
  TextField,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import reportWebVitals from '../../../../reportWebVitals';
import theme from '../../../../theme';
import Layout, { LayoutProps } from '../../components/Layout';

declare const layoutProps: LayoutProps;
declare const pageProps: LoginPageProps;

const icons = {
  github: <GitHubIcon />,
} as {
  [key: string]: React.ReactElement;
};

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
  register?: {
    newUserLabel: string;
    url: string;
    label: string;
  };
  selectedCredential?: string;
  socialProviders: {
    loginUrl: string;
    alias: string;
    providerId: string;
    displayName: string;
  }[];
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
    register,
    selectedCredential,
    socialProviders,
  } = props;

  if (!loginEnabled) {
    return <p>Login não habilitado, contactar o administrador.</p>;
  }

  return (
    <Box padding={2}>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item xs={12} sm={socialProviders ? 7 : 12}>
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
              label={passwordLabel}
              type="password"
              fullWidth
              variant="outlined"
              autoComplete="off"
              margin="normal"
            />
            <Grid container alignItems="center" justifyContent="space-between">
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
              {resetPasswordAllowed && (
                <Link href={resetPasswordUrl} color="secondary">
                  {resetPasswordLabel}
                </Link>
              )}
            </Grid>
            <Grid container>
              <Grid
                item
                xs={7}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {register && (
                  <div>
                    {register.newUserLabel}{' '}
                    <Link href={register.url} color="secondary">
                      {register.label}
                    </Link>
                  </div>
                )}
              </Grid>
              <Grid
                item
                xs={5}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <input
                  type="hidden"
                  id="id-hidden-input"
                  name="credentialId"
                  defaultValue={selectedCredential}
                />
                <Button type="submit" color="secondary" variant="contained">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        {socialProviders && (
          <>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={4}>
              <List>
                {socialProviders.map((socialProvider, key) => (
                  <ListItem
                    key={key}
                    button
                    component="a"
                    href={socialProvider.loginUrl}
                  >
                    <ListItemIcon>
                      {icons[socialProvider.providerId]}
                    </ListItemIcon>
                    <ListItemText>{socialProvider.displayName}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </>
        )}
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
