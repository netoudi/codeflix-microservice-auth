import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import Navbar from '../Navbar';
import LocaleSelect from '../LocaleSelect';

const useStyles = makeStyles((theme: Theme) => {
  return {
    content: {
      display: 'flex',
      height: '100%',
      paddingTop: '70px',
    },
    cardWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    card: {
      width: 600,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    },
    title: {
      color: '#999999',
      textAlign: 'center',
    },
    locale: {
      fontSize: '12px',
    },
  };
});

export interface LayoutProps {
  title: string;
  i18nEnabled: boolean;
  locale?: {
    currentLocale: string;
    locales: {
      label: string;
      url: string;
    }[];
  };
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { title, i18nEnabled, locale, children } = props;

  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Box className={classes.content}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item className={classes.cardWrapper}>
            <Card className={classes.card}>
              <CardHeader className={classes.title} title={title} />
              <CardContent>{children}</CardContent>
            </Card>
          </Grid>
          {i18nEnabled && locale && (
            <Grid item>
              <LocaleSelect
                className={classes.locale}
                locales={locale.locales}
                defaultValue={locale.currentLocale}
                disableUnderline
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
