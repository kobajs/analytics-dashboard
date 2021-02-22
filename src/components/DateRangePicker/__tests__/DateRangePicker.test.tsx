import { render } from '@testing-library/react'
import { DateRangePicker } from '../DateRangePicker'

describe('DateRangePicker', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<DateRangePicker label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
