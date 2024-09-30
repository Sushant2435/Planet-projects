import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

// Async thunk for fetching orders
export const getMyOrder = createAsyncThunk('order/getMyOrder', async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/order/getMyOrder');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch orders');
    }
});

// Slice for order state
const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        status: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMyOrder.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getMyOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload.orders;
            })
            .addCase(getMyOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default orderSlice.reducer;
