import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedMarketPositions } from '../AnalyticsPrice.reducer';
import { useSelectedMarketPositions } from '../AnalyticsPrice.selectors';

export const useMarketPositions = () => {
  const dispatch = useDispatch();

  const { selectedMarketPositions } = useSelectedMarketPositions();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      dispatch(
        changeSelectedMarketPositions({
          name,
          checked,
        }),
      );
    },
    [dispatch],
  );

  return {
    selectedMarketPositions,
    handleChange,
  };
};
