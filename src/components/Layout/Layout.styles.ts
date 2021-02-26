import { makeStyles } from '@material-ui/core';

export const useLayoutStyles = makeStyles((theme) => ({
  bg: {
    minHeight: '100vh',
    backgroundColor: '#eee',
  },
  inner: {
    padding: theme.spacing(4),
    maxWidth: 1024,
    margin: 'auto',
  },
}));
