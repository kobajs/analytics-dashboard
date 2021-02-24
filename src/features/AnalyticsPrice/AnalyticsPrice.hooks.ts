import { Moment } from 'moment'
import { useDispatch } from 'react-redux'
import { AnalyticsPriceDates, changeDate } from './AnalyticsPrice.reducer'
import { useAnalyticsPriceDates } from './AnalyticsPrice.selectors'

export const useAnalyticsPrice = () => {
  const dispatch = useDispatch()
  const { dates } = useAnalyticsPriceDates()

  const handleDateChange = (timeline: keyof AnalyticsPriceDates) => (
    selectedDate: Moment
  ) => {
    dispatch(changeDate({ timeline, selectedDate }))
  }

  return {
    from: dates.from,
    to: dates.to,
    handleDateChange,
  }
}
