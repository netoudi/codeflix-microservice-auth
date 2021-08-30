import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Navbar from '../Navbar';

export interface LayoutProps {
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
  const { i18nEnabled, locale, children } = props;

  return (
    <div>
      <Navbar />
      <Box paddingTop="70px">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>{children}</Grid>
          {i18nEnabled && locale && <Grid item>language</Grid>}
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
