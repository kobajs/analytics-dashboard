import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createGenericSlice,
  GenericState,
} from "../../store/createGenericSlice";
import { MarketRate } from "../../entities/MarketRate";
import { MarketRatesAPI } from "../../api/MarketRatesAPI";
import { RootState } from "../../store";

interface AnalyticsPriceState {
  dates: {
    from: Date;
    to: Date;
  };
  selectedMarketPositions: {
    [k: string]: boolean;
  };
  marketRates: Array<MarketRate>;
}

type State = GenericState<AnalyticsPriceState>;

const initialState: State = {
  data: {
    dates: {
      from: new Date(),
      to: new Date(),
    },
    selectedMarketPositions: {
      low: false,
      mean: false,
      high: false,
    },
    marketRates: [],
  },
  status: "finished",
  error: null,
};

export const getMarketRates = createAsyncThunk<
  AnalyticsPriceState["marketRates"],
  null,
  {
    rejectValue: { code: string; message: string };
    state: RootState;
  }
>("analyticsPrice/getMarketRates", async (_, { rejectWithValue, getState }) => {
  try {
    const { ports } = getState();
    const { origin, destination } = ports.data;
    const marketRates = await new MarketRatesAPI().getAllMarketRatesForPorts(
      origin,
      destination
    );

    return marketRates;
  } catch (e) {
    return rejectWithValue({ code: e.code, message: e.message });
  }
});

const analyticsPriceSlice = createGenericSlice({
  name: "analyticsPrice",
  initialState,
  reducers: {
    changeSelectedMarketPositions(
      state,
      action: PayloadAction<{
        name: string;
        checked: boolean;
      }>
    ) {
      state.data.selectedMarketPositions[action.payload.name] =
        action.payload.checked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMarketRates.pending, (state, { payload }) => {
      state.status = "loading";
    });
    builder.addCase(getMarketRates.fulfilled, (state, { payload }) => {
      state.status = "finished";
      state.data.marketRates = payload;
    });
    builder.addCase(getMarketRates.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = {
        name: payload.code,
        message: payload.message,
      };
    });
  },
});

const { actions, reducer } = analyticsPriceSlice;

const { changeSelectedMarketPositions } = actions;

export { changeSelectedMarketPositions };

export default reducer;
