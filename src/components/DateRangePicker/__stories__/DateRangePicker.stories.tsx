import { DateRangePicker, DateRangePickerProps } from '../DateRangePicker'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<DateRangePickerProps> = (args) => (
  <DateRangePicker {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}

const DateRangePickerStory = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
}

export default DateRangePickerStory
