import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
