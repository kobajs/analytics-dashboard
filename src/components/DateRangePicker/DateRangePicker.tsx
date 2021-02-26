import { FC } from 'react';
import DateFnsUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';

import { useDateRangePickerStyles } from './DateRangePicker.styles';

export type DateRangePickerProps = {
  from: Pick<KeyboardDatePickerProps, 'value' | 'onChange'>;
  to: Pick<KeyboardDatePickerProps, 'value' | 'onChange'>;
};

export const DateRangePicker: FC<DateRangePickerProps> = ({ from, to }) => {
  const classes = useDateRangePickerStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={classes.datePicker}
          disableToolbar
          variant="inline"
          format="yyyy-MM-DD"
          id="date-picker-from"
          label="From"
          inputVariant="outlined"
          KeyboardButtonProps={{
            'aria-label': 'Start Date',
          }}
          {...from}
        />
        <KeyboardDatePicker
          className={classes.datePicker}
          disableToolbar
          variant="inline"
          format="yyyy-MM-DD"
          id="date-picker-to"
          label="To"
          inputVariant="outlined"
          KeyboardButtonProps={{
            'aria-label': 'End Date',
          }}
          {...to}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};
