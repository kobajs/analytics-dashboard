import { shallowEqual, useSelector } from 'react-redux'

export const useSelectedMarketPositions = () =>
  useSelector(
    ({ analyticsPrice }) => ({
      selectedMarketPositions: analyticsPrice.data.selectedMarketPositions,
    }),
    shallowEqual
  )

export const useAnalyticsPriceDates = () =>
  useSelector(
    ({ analyticsPrice }) => ({
      dates: analyticsPrice.data.dates,
    }),
    shallowEqual
  )

export const useFilteredMarketRates = () =>
  useSelector(
    ({ analyticsPrice }) => ({
      marketRates: analyticsPrice.data.marketRates,
    }),
    shallowEqual
  )
