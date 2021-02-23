import { DateRangePicker, DateRangePickerProps } from '../DateRangePicker'
import { Story } from '@storybook/react/types-6-0'
import { useState } from 'react'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import moment from 'moment'

const Template: Story<DateRangePickerProps> = () => {
  const [fromDate, setFromDate] = useState<MaterialUiPickersDate>(moment())
  const [toDate, setToDate] = useState<MaterialUiPickersDate>(moment())
  return (
    <DateRangePicker
      from={{
        value: fromDate,
        onChange: setFromDate,
      }}
      to={{
        value: toDate,
        onChange: setToDate,
      }}
    />
  )
}

export const Primary = Template.bind({})

Primary.args = {}

const DateRangePickerStory = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
}

export default DateRangePickerStory
