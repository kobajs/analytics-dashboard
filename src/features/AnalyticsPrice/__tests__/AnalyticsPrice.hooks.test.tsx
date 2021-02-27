import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';
import moment from 'moment';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { useAnalyticsPrice } from '../AnalyticsPrice.hooks';
import * as AnalyticsPriceReducer from '../AnalyticsPrice.reducer';
import * as PortsReducer from '../../PortsSelection/PortsSelection.reducer';
import { act } from 'react-dom/test-utils';

(AnalyticsPriceReducer.getMarketRates as any) = jest.fn(() => ({ type: 'GET_MARKET_RATES' }));
(AnalyticsPriceReducer.changeDate as any) = jest.fn(() => ({ type: 'CHANGE_DATE' }));

jest.mock('../AnalyticsPrice.selectors', () => ({
  useAnalyticsPriceDates: jest.fn(() => ({
    dates: {
      from: '2021-01-01',
      to: '2021-02-01',
    },
  })),
}));

const wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('useAnalyticsPrice', () => {
  it('should get selected dates from selector', () => {
    const { result } = renderHook(() => useAnalyticsPrice(), {
      wrapper,
    });

    expect(result.current.from).toBe('2021-01-01');
    expect(result.current.to).toBe('2021-02-01');
  });

  it('should get the new market rates when component mounts', () => {
    renderHook(() => useAnalyticsPrice(), {
      wrapper,
    });

    expect(AnalyticsPriceReducer.getMarketRates).toBeCalledTimes(1);
  });

  it('should get the new market rates when origin changes', () => {
    renderHook(() => useAnalyticsPrice(), {
      wrapper,
    });

    act(() => {
      store.dispatch(PortsReducer.changePort({ location: 'origin', value: 'BRAZI' }));
    });

    expect(AnalyticsPriceReducer.getMarketRates).toBeCalledTimes(2);
  });

  it('should get the new market rates when destination changes', () => {
    renderHook(() => useAnalyticsPrice(), {
      wrapper,
    });

    act(() => {
      store.dispatch(PortsReducer.changePort({ location: 'destination', value: 'BRAZI' }));
    });

    expect(AnalyticsPriceReducer.getMarketRates).toBeCalledTimes(2);
  });

  it('should call changeDate when handleDateChange is called', () => {
    const { result } = renderHook(() => useAnalyticsPrice(), {
      wrapper,
    });

    result.current.handleDateChange('from')(moment());

    expect(AnalyticsPriceReducer.changeDate).toHaveBeenCalled();
  });
});
