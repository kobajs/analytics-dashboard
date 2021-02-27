import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';
import * as ReactRedux from 'react-redux';
import { store } from '../../../../store';
import { useMarketPositions } from '../MarketPositions.hooks';
import * as AnalyticsPriceReducer from '../../AnalyticsPrice.reducer';

(ReactRedux.useDispatch as jest.Mock) = jest.fn(() => jest.fn());

(AnalyticsPriceReducer.changeSelectedMarketPositions as any) = jest.fn();

const wrapper: FC = ({ children }) => <ReactRedux.Provider store={store}>{children}</ReactRedux.Provider>;

describe('useMarketPositions', () => {
  it('should return selectedMarketPositions', () => {
    const selectedMarketPositions = {
      low: false,
      mean: false,
      high: false,
    };

    store.getState().analyticsPrice.data.selectedMarketPositions = selectedMarketPositions;

    const { result } = renderHook(() => useMarketPositions(), {
      wrapper,
    });

    expect(result.current.selectedMarketPositions).toMatchObject(selectedMarketPositions);
  });

  it('should call changeSelectedMarketPositions when handleChange is called', () => {
    const { result } = renderHook(() => useMarketPositions(), {
      wrapper,
    });

    const mockEvent: any = {
      target: {
        name: 'low',
        checked: true,
      },
    };

    result.current.handleChange(mockEvent);

    expect(AnalyticsPriceReducer.changeSelectedMarketPositions).toHaveBeenCalled();
  });
});
