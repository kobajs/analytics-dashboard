import { Moment } from 'moment';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelectedPortsSelector } from '../PortsSelection/PortsSelection.selectors';
import { AnalyticsPriceDates, changeDate, getMarketRates } from './AnalyticsPrice.reducer';
import { useAnalyticsPriceDates } from './AnalyticsPrice.selectors';

export const useAnalyticsPrice = () => {
  const dispatch = useDispatch();
  const { dates } = useAnalyticsPriceDates();
  const { origin, destination } = useSelectedPortsSelector();

  const handleDateChange = (timeline: keyof AnalyticsPriceDates) => (selectedDate: Moment) => {
    dispatch(changeDate({ timeline, selectedDate: selectedDate.toISOString() }));
  };

  useEffect(() => {
    dispatch(getMarketRates());
  }, [origin, destination]);

  return {
    from: dates.from,
    to: dates.to,
    handleDateChange,
  };
};
