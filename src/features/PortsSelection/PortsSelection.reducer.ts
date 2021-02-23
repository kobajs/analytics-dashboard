import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createGenericSlice,
  GenericState,
} from "../../store/createGenericSlice";
import { Port } from "../../entities/Port";
import { PortsAPI } from "../../api/PortsAPI";

interface PortsSelectionState {
  availablePorts: Port[];
  origin: string;
  destination: string;
}

type State = GenericState<PortsSelectionState>;

const initialState: State = {
  data: {
    availablePorts: [],
    origin: "",
    destination: "",
  },
  status: "finished",
  error: null,
};

export const getAllAvailablePorts = createAsyncThunk<
  PortsSelectionState["availablePorts"],
  null,
  {
    rejectValue: { code: string; message: string };
  }
>("ports/getAllAvailablePorts", async (_, { rejectWithValue }) => {
  try {
    const availablePorts = await new PortsAPI().getAllPorts();

    return availablePorts;
  } catch (e) {
    return rejectWithValue({ code: e.code, message: e.message });
  }
});

const portsSlice = createGenericSlice({
  name: "ports",
  initialState,
  reducers: {
    changePort(
      state,
      action: PayloadAction<{
        location: "origin" | "destination";
        value: string;
      }>
    ) {
      state.data[action.payload.location] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAvailablePorts.pending, (state, { payload }) => {
      state.status = "loading";
    });
    builder.addCase(getAllAvailablePorts.fulfilled, (state, { payload }) => {
      state.status = "finished";
      state.data.availablePorts = payload;
      state.data.origin = payload[0].code;
      state.data.destination = payload[1].code;
    });
    builder.addCase(getAllAvailablePorts.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = {
        name: payload.code,
        message: payload.message,
      };
    });
  },
});

const { actions, reducer } = portsSlice;

const { changePort } = actions;

export { changePort };

export default reducer;
