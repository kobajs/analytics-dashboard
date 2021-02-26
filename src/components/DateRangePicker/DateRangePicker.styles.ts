import { makeStyles } from '@material-ui/core';

export const useDateRangePickerStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    marginBottom: theme.spacing(2),
  },
  datePicker: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
