import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { AnalyticsPrice } from '../AnalyticsPrice';
import * as ReactRedux from 'react-redux';

(ReactRedux.useDispatch as jest.Mock) = jest.fn(() => jest.fn());

describe('AnalyticsPrice', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <AnalyticsPrice />
      </Provider>,
    );

    expect(container).toBeInTheDocument();
  });
});
