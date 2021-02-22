import { FC, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import { useDateRangePickerStyles } from './DateRangePicker.styles'

export type DateRangePickerProps = {}

export const DateRangePicker: FC<DateRangePickerProps> = () => {
  const classes = useDateRangePickerStyles()
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const handleSelect = (item) => {
    console.log(item)
    setSelectionRange([item.selection])
  }

  return <DateRange ranges={selectionRange} onChange={handleSelect} />
}
