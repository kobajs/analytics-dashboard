import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { PortsSelection } from '../PortsSelection';
import * as ReactRedux from 'react-redux';

(ReactRedux.useDispatch as jest.Mock) = jest.fn(() => jest.fn());

describe('PortsSelection', () => {
  it('should render correctly', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <PortsSelection />
      </Provider>,
    );

    const selectElements = getAllByRole('button');
    expect(selectElements.length).toBe(2);
  });
});
