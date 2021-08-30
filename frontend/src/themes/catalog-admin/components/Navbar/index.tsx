import React from 'react';
import {
  AppBar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import logo from '../../../../static/img/logo.png';

const useStyles = makeStyles((theme: Theme) => {
  return {
    toolbar: {
      backgroundColor: '#000000',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    logo: {
      width: 100,
      [theme.breakpoints.up('sm')]: {
        width: 170,
      },
    },
  };
});

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          <img src={logo} alt="CodeFlix" className={classes.logo} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
