import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query, thunkAPI) => {
    try {
      const response = await axiosInstance.post("SearchRoute/createSearch", {
        query,
      });
      return response.data.products; // Make sure you're returning the right array
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

// Define the search slice
const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload; // Update state with search results
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Handle errors
      });
  },
});

export default searchSlice.reducer;
