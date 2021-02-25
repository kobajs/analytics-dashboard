import { shallowEqual, useSelector } from 'react-redux';
import moment from 'moment';
import { MarketRate } from '../../entities/MarketRate';

export const useSelectedMarketPositions = () =>
  useSelector(
    ({ analyticsPrice }) => ({
      selectedMarketPositions: analyticsPrice.data.selectedMarketPositions,
    }),
    shallowEqual,
  );

export const useAnalyticsPriceDates = () =>
  useSelector(
    ({ analyticsPrice }) => ({
      dates: analyticsPrice.data.dates,
    }),
    shallowEqual,
  );

export const useFilteredMarketRates = () =>
  useSelector(({ analyticsPrice }) => {
    const { selectedMarketPositions, dates } = analyticsPrice.data;
    const { from, to } = dates;

    const filteredMarketRates = analyticsPrice.data.marketRates.reduce((prev, cur) => {
      if (moment(cur.day).isBetween(from, to, 'day', '[]')) {
        const filteredMarketRate: Partial<MarketRate> = {
          day: cur.day,
        };

        Object.keys(selectedMarketPositions).forEach((position: Exclude<keyof MarketRate, 'day'>) => {
          if (selectedMarketPositions[position]) {
            filteredMarketRate[position] = cur[position];
          }
        });

        return [...prev, filteredMarketRate];
      } else {
        return prev;
      }
    }, []);

    return {
      marketRates: filteredMarketRates,
    };
  }, shallowEqual);
