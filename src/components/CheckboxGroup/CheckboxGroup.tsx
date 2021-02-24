import { FC } from 'react';
import { FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox, CheckboxProps } from '@material-ui/core';

export type CheckboxGroupProps = {
  label: string;
  onChange: CheckboxProps['onChange'];
  options: {
    [k: string]: boolean;
  };
  optionsLabels: {
    [k: string]: string;
  };
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ label, onChange, options, optionsLabels }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row>
        {Object.keys(options).map((optionKey) => (
          <FormControlLabel
            key={optionKey}
            control={<Checkbox checked={options[optionKey]} onChange={onChange} name={optionKey} />}
            label={optionsLabels[optionKey]}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
