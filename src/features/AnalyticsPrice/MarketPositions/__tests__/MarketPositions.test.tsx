import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as ReactRedux from 'react-redux';
import { MarketPositions } from '../MarketPositions';
import { store } from '../../../../store';
(ReactRedux.useDispatch as jest.Mock) = jest.fn(() => jest.fn());

describe('MarketPositions', () => {
  it('should render correctly', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <MarketPositions />
      </Provider>,
    );

    const checkboxGroup = getAllByRole('checkbox');
    expect(checkboxGroup.length).toBe(3);
  });
});
