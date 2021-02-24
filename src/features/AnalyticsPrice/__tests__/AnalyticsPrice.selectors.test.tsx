import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { useSelectedMarketPositions } from '../AnalyticsPrice.selectors';

const wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('useSelectedPortsSelector', () => {
  it('should get origin and destination from store ports reducer', () => {
    const selectedMarketPositions = {
      low: false,
      mean: false,
      high: false,
    };

    store.getState().analyticsPrice.data.selectedMarketPositions = selectedMarketPositions;

    const { result } = renderHook(() => useSelectedMarketPositions(), {
      wrapper,
    });

    expect(result.current.selectedMarketPositions).toMatchObject(selectedMarketPositions);
  });
});
