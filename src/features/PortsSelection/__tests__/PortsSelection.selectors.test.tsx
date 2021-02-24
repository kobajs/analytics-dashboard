import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { Port } from '../../../entities/Port';
import { store } from '../../../store';
import { useAvailablePortsSelector, useSelectedPortsSelector } from '../PortsSelection.selectors';

const wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;

// NOTE: it seems to be that is testing the library, but I'd like to do that because selectors can have some logic or derivated values

describe('useAvailablePortsSelector', () => {
  it('should get availablePorts from store ports reducer', () => {
    const availablePorts: Port[] = [
      {
        code: 'NOOSL',
        name: 'Oslo',
      },
      {
        code: 'CNSGH',
        name: 'Shanghai',
      },
    ];

    store.getState().ports.data.availablePorts = availablePorts;

    const { result } = renderHook(() => useAvailablePortsSelector(), {
      wrapper,
    });

    expect(result.current.availablePorts).toBe(availablePorts);
  });

  it('should get isLoading as a derivated value from ports reducer status', () => {
    store.getState().ports.status = 'loading';

    const { result } = renderHook(() => useAvailablePortsSelector(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isLoading).toBe(true);
  });
});

describe('useSelectedPortsSelector', () => {
  it('should get origin and destination from store ports reducer', () => {
    store.getState().ports.data.origin = 'NOOSL';
    store.getState().ports.data.destination = 'CNSGH';

    const { result } = renderHook(() => useSelectedPortsSelector(), {
      wrapper,
    });

    expect(result.current.origin).toBe('NOOSL');
    expect(result.current.destination).toBe('CNSGH');
  });
});
