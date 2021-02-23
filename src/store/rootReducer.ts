import { combineReducers } from "@reduxjs/toolkit";
import portsReducer from "../features/PortsSelection/PortsSelection.reducer";

const rootReducer = combineReducers({
  ports: portsReducer,
});

export default rootReducer;
