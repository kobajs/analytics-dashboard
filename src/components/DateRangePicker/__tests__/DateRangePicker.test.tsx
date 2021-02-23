import { render } from '@testing-library/react'
import moment from 'moment'
import { DateRangePicker } from '../DateRangePicker'

describe('DateRangePicker', () => {
  it('should render 2 Date Pickers correctly', () => {
    const { getAllByRole, getByLabelText } = render(
      <DateRangePicker
        from={{
          value: moment(),
          onChange: (date) => date,
        }}
        to={{
          value: moment(),
          onChange: (date) => date,
        }}
      />
    )

    expect(getAllByRole('textbox').length).toBe(2)
    expect(getByLabelText('From')).toBeInTheDocument()
    expect(getByLabelText('To')).toBeInTheDocument()
  })
})
