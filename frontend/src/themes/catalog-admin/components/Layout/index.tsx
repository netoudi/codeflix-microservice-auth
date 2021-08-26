import React from 'react';
import { Typography } from '@material-ui/core';

const Layout: React.FunctionComponent = (props) => {
  return <Typography component="h2">{props.children}</Typography>;
};

export default Layout;
