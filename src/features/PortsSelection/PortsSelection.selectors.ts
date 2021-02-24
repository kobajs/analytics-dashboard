import { shallowEqual, useSelector } from 'react-redux';

export const useAvailablePortsSelector = () =>
  useSelector(
    ({ ports }) => ({
      availablePorts: ports.data.availablePorts,
      isLoading: ports.status === 'loading',
    }),
    shallowEqual,
  );

export const useSelectedPortsSelector = () =>
  useSelector(
    ({ ports }) => ({
      origin: ports.data.origin,
      destination: ports.data.destination,
    }),
    shallowEqual,
  );
