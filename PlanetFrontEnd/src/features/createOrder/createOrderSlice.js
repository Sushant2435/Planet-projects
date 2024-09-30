import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const createOrder = createAsyncThunk(
  "create_order",
  async (item, { rejectWithValue }) => {
    console.log(item, "item from buy now");
    try {
      const response = await axiosInstance.post("/order/createOrder", item);
      console.log(response.data, "from redux toolkit data");
      return response.data;
    } catch (error) {
      console.log(error, "error toolkit data");
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchPaymentDetails = createAsyncThunk(
  "fetchPaymentDetails",
  async (amount, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/payment/generateUpiQrcode",
        amount
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  error: null,

  createOrder: [],
  paymentDetails: null,
  status: "idle",

};

console.log(initialState.createOrder, "createOrder slice");

const cartSlice = createSlice({
  name: "createOrder",
  initialState,
  reducers: {
    clearCreateOrder: (state) => {
      state.createOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.createOrder.push(action.payload); 

      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      .addCase(fetchPaymentDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPaymentDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentDetails = action.payload;
      })
      .addCase(fetchPaymentDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const { clearCreateOrder } = cartSlice.actions;
export default cartSlice.reducer;
