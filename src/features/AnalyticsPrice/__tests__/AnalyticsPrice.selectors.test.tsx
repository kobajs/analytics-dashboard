import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';
import moment from 'moment';
import { Provider } from 'react-redux';
import { MarketRate } from '../../../entities/MarketRate';
import { store } from '../../../store';
import { AnalyticsPriceDates, AnalyticsPriceState } from '../AnalyticsPrice.reducer';
import {
  useAnalyticsPriceDates,
  useFilteredMarketRates,
  useSelectedMarketPositions,
} from '../AnalyticsPrice.selectors';

const wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('useSelectedMarketPositions', () => {
  it('should get selected market positions from store analyticsPrice reducer', () => {
    const selectedMarketPositions: AnalyticsPriceState['selectedMarketPositions'] = {
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

describe('useAnalyticsPriceDates', () => {
  it('should get selected dates from store analyticsPrice reducer', () => {
    const dates: AnalyticsPriceDates = {
      from: new Date().toISOString(),
      to: new Date().toISOString(),
    };

    store.getState().analyticsPrice.data.dates = dates;

    const { result } = renderHook(() => useAnalyticsPriceDates(), {
      wrapper,
    });

    expect(result.current.dates).toMatchObject(dates);
  });
});

describe('useFilteredMarketRates', () => {
  it('should get filtered market rates derivated from selected market positions of store ports reducer', () => {
    const marketRates: MarketRate[] = [
      {
        day: '2021-01-01',
        mean: 1615,
        low: 1037,
        high: 2436,
      },
      {
        day: '2021-01-02',
        mean: 1615,
        low: 1037,
        high: 2436,
      },
    ];

    const dates: AnalyticsPriceDates = {
      from: moment('2021-01-01').toISOString(),
      to: moment('2021-01-02').toISOString(),
    };

    const selectedMarketPositions: AnalyticsPriceState['selectedMarketPositions'] = {
      low: false,
      mean: true,
      high: false,
    };

    store.getState().analyticsPrice.data.marketRates = marketRates;
    store.getState().analyticsPrice.data.dates = dates;
    store.getState().analyticsPrice.data.selectedMarketPositions = selectedMarketPositions;

    const { result } = renderHook(() => useFilteredMarketRates(), {
      wrapper,
    });

    expect(result.current.marketRates).toMatchObject([
      {
        day: '2021-01-01',
        mean: 1615,
      },
      {
        day: '2021-01-02',
        mean: 1615,
      },
    ]);
  });
});
