import { FC } from 'react';
import { CheckboxGroup } from '../../../components';
import { useMarketPositions } from './MarketPositions.hooks';

import { useMarketPositionsStyles } from './MarketPositions.styles';

const marketPositionsLabels = {
  low: 'Market Low',
  mean: 'Market Mean',
  high: 'Market High',
};

export type MarketPositionsProps = {};

export const MarketPositions: FC<MarketPositionsProps> = () => {
  const classes = useMarketPositionsStyles();

  const { selectedMarketPositions, handleChange } = useMarketPositions();

  return (
    <CheckboxGroup
      label="Market Position"
      options={selectedMarketPositions}
      onChange={handleChange}
      optionsLabels={marketPositionsLabels}
    />
  );
};
