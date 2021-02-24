import { renderHook } from '@testing-library/react-hooks'
import { FC } from 'react'
import * as ReactRedux from 'react-redux'
import { store } from '../../../../store'
import { useMarketPositions } from '../MarketPositions.hooks'

;(ReactRedux.useDispatch as jest.Mock) = jest.fn(() => jest.fn())

const wrapper: FC = ({ children }) => (
  <ReactRedux.Provider store={store}>{children}</ReactRedux.Provider>
)

describe('useMarketPositions', () => {
  it('should return selectedMarketPositions', () => {
    const selectedMarketPositions = {
      low: false,
      mean: false,
      high: false,
    }

    store.getState().analyticsPrice.data.selectedMarketPositions = selectedMarketPositions

    const { result } = renderHook(() => useMarketPositions(), {
      wrapper,
    })

    expect(result.current.selectedMarketPositions).toMatchObject(
      selectedMarketPositions
    )
  })
})
