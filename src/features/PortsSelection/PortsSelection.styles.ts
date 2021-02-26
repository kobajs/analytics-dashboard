import { makeStyles } from '@material-ui/core';

export const usePortsSelectionStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));
