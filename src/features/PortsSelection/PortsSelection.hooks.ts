import { ChangeEvent, useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { SelectDropdownProps } from '../../components'
import { Port } from '../../entities/Port'
import { changePort, getAllAvailablePorts } from './PortsSelection.reducer'
import {
  useAvailablePortsSelector,
  useSelectedPortsSelector,
} from './PortsSelection.selectors'

export const usePortsSelection = () => {
  const dispatch = useDispatch()
  const { availablePorts, isLoading } = useAvailablePortsSelector()
  const { origin, destination } = useSelectedPortsSelector()

  useEffect(() => {
    dispatch(getAllAvailablePorts())
  }, [dispatch])

  const mapAvailablePortsToOptions = useCallback(
    (port: Port): SelectDropdownProps['options'][0] => ({
      value: port.code,
      label: `${port.name} (${port.code})`,
    }),
    []
  )

  const handlePortChange = useCallback(
    (location: 'origin' | 'destination') => (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      dispatch(changePort({ location, value: e.target.value }))
    },
    [dispatch]
  )

  const options = useMemo(
    () => availablePorts.map(mapAvailablePortsToOptions),
    [mapAvailablePortsToOptions, availablePorts]
  )

  return {
    isLoading,
    options,
    origin,
    destination,
    handlePortChange,
  }
}
