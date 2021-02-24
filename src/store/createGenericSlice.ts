import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';

export interface GenericState<T> {
  data?: T;
  status: 'loading' | 'finished' | 'error';
  error: Error;
}

export const createGenericSlice = <T, Reducers extends SliceCaseReducers<GenericState<T>>>({
  name = '',
  initialState,
  reducers,
  extraReducers,
}: {
  name: string;
  initialState: GenericState<T>;
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
  extraReducers?: (builder: ActionReducerMapBuilder<GenericState<T>>) => void;
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      start(state) {
        state.status = 'loading';
      },
      success(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = 'finished';
      },
      error(state, action: PayloadAction<Error>) {
        state.error = action.payload;
        state.status = 'error';
      },
      clear(state: GenericState<T>) {
        state = initialState;
      },
      ...reducers,
    },
    extraReducers,
  });
};
