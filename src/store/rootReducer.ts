import { combineReducers } from "@reduxjs/toolkit";
import portsReducer from "../features/PortsSelection/PortsSelection.reducer";
import analyticsPriceReducer from "../features/AnalyticsPrice/AnalyticsPrice.reducer";

const rootReducer = combineReducers({
  ports: portsReducer,
  analyticsPrice: analyticsPriceReducer,
});

export default rootReducer;
