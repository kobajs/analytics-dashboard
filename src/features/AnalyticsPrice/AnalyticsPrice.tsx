import { FC } from 'react'
import { DateRangePicker } from '../../components'
import { PortsSelection } from '../PortsSelection'
import { useAnalyticsPrice } from './AnalyticsPrice.hooks'

import { useAnalyticsPriceStyles } from './AnalyticsPrice.styles'
import { MarketRateChart } from './MarketRateChart'

export type AnalyticsPriceProps = {}

export const AnalyticsPrice: FC<AnalyticsPriceProps> = () => {
  const classes = useAnalyticsPriceStyles()
  const { from, to, handleDateChange } = useAnalyticsPrice()

  return (
    <div className={classes.root}>
      <PortsSelection />
      <DateRangePicker
        from={{
          value: from,
          onChange: handleDateChange('from'),
        }}
        to={{
          value: to,
          onChange: handleDateChange('to'),
        }}
      />
      <MarketRateChart />
    </div>
  )
}
