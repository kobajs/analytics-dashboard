import { makeStyles } from '@material-ui/core';

export const useAnalyticsPriceStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(4),
    },
  },
}));
