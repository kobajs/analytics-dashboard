import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import { FC } from 'react';

import { useSelectDropdownStyles } from './SelectDropdown.styles';

export type SelectDropdownProps = {
  options: Array<{
    value: string;
    label: string;
  }>;
} & TextFieldProps;

export const SelectDropdown: FC<SelectDropdownProps> = ({ options, ...otherProps }) => {
  const classes = useSelectDropdownStyles();

  return (
    <TextField select variant="outlined" className={classes.root} {...otherProps}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
