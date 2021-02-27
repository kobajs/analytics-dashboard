import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../../../store';
import { MarketRateChart } from '../MarketRateChart';

describe('MarketRateChart', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <MarketRateChart />
      </Provider>,
    );

    expect(container).toBeInTheDocument();
  });
});
