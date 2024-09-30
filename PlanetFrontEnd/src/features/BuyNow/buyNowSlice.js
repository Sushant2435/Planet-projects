import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

const data =
  localStorage.getItem("buynow") !== null
    ? JSON.parse(localStorage.getItem("buynow"))
    : [];

export const buyNow = createAsyncThunk(
  "buyNow",
  async (item, { rejectWithValue }) => {
    console.log(item, "item from buy now");
    try {
      const response = await axiosInstance.post("/cart/oneItemSummary", item);
      console.log(response.data, "from redux toolkit data");
      return response.data;
    } catch (error) {
      console.log(error, "error toolkit data");
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  error: null,
  buynow: data,
  status: "idle",
};

console.log(initialState.buynow, "buynow slice");

const cartSlice = createSlice({
  name: "buynow",
  initialState,
  reducers: {
    clearBuynow: (state) => {
      state.buynow = [];

      localStorage.removeItem("buynow");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyNow.pending, (state) => {
        state.status = "loading";
      })
      .addCase(buyNow.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.buynow.push(action.payload);
        localStorage.setItem("buynow", JSON.stringify(state.buynow));
      })
      .addCase(buyNow.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const { clearBuynow } = cartSlice.actions;
export default cartSlice.reducer;
