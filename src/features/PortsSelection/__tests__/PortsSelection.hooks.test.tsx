import { renderHook } from '@testing-library/react-hooks';
import { FC } from 'react';
import * as ReactRedux from 'react-redux';
import { SelectDropdownProps } from '../../../components';
import { Port } from '../../../entities/Port';
import { store } from '../../../store';
import { usePortsSelection } from '../PortsSelection.hooks';

(ReactRedux.useDispatch as jest.Mock) = jest.fn(() => jest.fn());

const wrapper: FC = ({ children }) => <ReactRedux.Provider store={store}>{children}</ReactRedux.Provider>;

describe('usePortsSelection', () => {
  it('should get options mapped from availablePorts', () => {
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

    const { result } = renderHook(() => usePortsSelection(), {
      wrapper,
    });

    const expectedOptions: SelectDropdownProps['options'] = [
      {
        label: 'Oslo (NOOSL)',
        value: 'NOOSL',
      },
      {
        label: 'Shanghai (CNSGH)',
        value: 'CNSGH',
      },
    ];

    expect(result.current.options).toMatchObject(expectedOptions);
  });
});
