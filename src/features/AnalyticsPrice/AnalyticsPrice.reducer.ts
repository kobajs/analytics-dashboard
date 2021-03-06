import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { createGenericSlice, GenericState } from '../../store/createGenericSlice';
import { MarketRate } from '../../entities/MarketRate';
import { MarketRatesAPI } from '../../api/MarketRatesAPI';
import { RootState } from '../../store';

export interface AnalyticsPriceDates {
  from: string; // Used string instead of data to be a serializable data at reducer
  to: string; // https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state
}

export interface AnalyticsPriceState {
  dates: AnalyticsPriceDates;
  selectedMarketPositions: {
    [k: string]: boolean;
  };
  marketRates: Array<MarketRate>;
}

type State = GenericState<AnalyticsPriceState>;

const initialState: State = {
  data: {
    dates: {
      from: moment().subtract(1, 'month').toISOString(),
      to: moment().toISOString(),
    },
    selectedMarketPositions: {
      low: true,
      mean: true,
      high: true,
    },
    marketRates: [],
  },
  status: 'finished',
  error: null,
};

export const getMarketRates = createAsyncThunk<
  AnalyticsPriceState['marketRates'],
  null,
  {
    rejectValue: { code: string; message: string };
    state: RootState;
  }
>('analyticsPrice/getMarketRates', async (_, { rejectWithValue, getState }) => {
  try {
    const { ports } = getState();
    const { origin, destination } = ports.data;
    const marketRates = await new MarketRatesAPI().getAllMarketRatesForPorts(origin, destination);

    return marketRates;
  } catch (e) {
    return rejectWithValue({ code: e.code, message: e.message });
  }
});

const analyticsPriceSlice = createGenericSlice({
  name: 'analyticsPrice',
  initialState,
  reducers: {
    changeSelectedMarketPositions(
      state,
      action: PayloadAction<{
        name: string;
        checked: boolean;
      }>,
    ) {
      state.data.selectedMarketPositions[action.payload.name] = action.payload.checked;
    },
    changeDate(
      state,
      action: PayloadAction<{
        timeline: keyof AnalyticsPriceDates;
        selectedDate: string;
      }>,
    ) {
      state.data.dates = {
        ...state.data.dates,
        [action.payload.timeline]: action.payload.selectedDate,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMarketRates.pending, (state, { payload }) => {
      state.status = 'loading';
    });
    builder.addCase(getMarketRates.fulfilled, (state, { payload }) => {
      state.status = 'finished';
      state.data.marketRates = payload;
    });
    builder.addCase(getMarketRates.rejected, (state, { payload }) => {
      state.status = 'error';
      state.error = {
        name: payload.code,
        message: payload.message,
      };
    });
  },
});

const { actions, reducer } = analyticsPriceSlice;

const { changeSelectedMarketPositions, changeDate } = actions;

export { changeSelectedMarketPositions, changeDate };

export default reducer;
