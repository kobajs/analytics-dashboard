import { FC } from 'react';
import { SelectDropdown } from '../../components';
import { usePortsSelection } from './PortsSelection.hooks';

import { usePortsSelectionStyles } from './PortsSelection.styles';

export type PortsSelectionProps = {};

export const PortsSelection: FC<PortsSelectionProps> = () => {
  const classes = usePortsSelectionStyles();
  const { isLoading, options, origin, destination, handlePortChange } = usePortsSelection();

  return (
    <div className={classes.root}>
      <SelectDropdown
        label="Origin"
        options={options}
        value={origin}
        disabled={isLoading}
        onChange={handlePortChange('origin')}
      />
      <SelectDropdown
        label="Destination"
        options={options}
        value={destination}
        disabled={isLoading}
        onChange={handlePortChange('destination')}
      />
    </div>
  );
};
