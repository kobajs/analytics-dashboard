import { FC } from 'react';

import { useLayoutStyles } from './Layout.styles';

export const Layout: FC = ({ children }) => {
  const classes = useLayoutStyles();

  return <div className={classes.root}>{children}</div>;
};
