import { shallowEqual, useSelector } from "react-redux";

export const useSelectedMarketPositions = () =>
  useSelector(
    ({ analyticsPrice }) => ({
      selectedMarketPositions: analyticsPrice.data.selectedMarketPositions,
    }),
    shallowEqual
  );
