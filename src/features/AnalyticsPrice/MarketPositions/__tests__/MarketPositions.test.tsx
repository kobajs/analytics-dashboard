import { render } from '@testing-library/react'
import { MarketPositions } from '../MarketPositions'

describe('MarketPositions', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<MarketPositions label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
