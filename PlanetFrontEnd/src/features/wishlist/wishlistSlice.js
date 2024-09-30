// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import axiosInstance from "../../config/axiosInstance";

// // Async thunk to add to wishlist
// export const addToWishlist = createAsyncThunk(
//   "wishlist/addToWishlist",
//   async (WishListData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post(
//         "/api/v1/wishlist",
//         WishListData
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data); // Handle API error
//     }
//   }
// );

// export const fetchWishlisttItems = createAsyncThunk(
//   "cart/fetchWishlistItems",
//   async () => {
//     try {
//       const response = await axiosInstance.get("/whislist/getallWhislist");
//       console.log(response.data, "Fetch Item form redux toolkit from wishlist");
//       return response.data;
//     } catch (error) {
//       console.log(error, "error toolkit data");
//       return error;
//     }
//   }
// );

// // Async thunk to remove from wishlist
// export const removeFromWishlist = createAsyncThunk(
//   "wishlist/removeFromWishlist",
//   async ({ productId }, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.delete(
//         `/api/v1/wishlist/${productId}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data); // Handle API error
//     }
//   }
// );

// export const removeAllWishlist = createAsyncThunk(
//   "cart/removeAllWishlist",
//   async (id, { dispatch, rejectWithValue }) => {
//     console.log(id, "item id from cart");
//     try {
//       const response = await axiosInstance.delete(
//         `/whislist/deleteWhislist/${id}`
//       );
//       console.log(response.data, "delete from reduxtoolkit");
//       dispatch(fetchWishlisttItems());
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState: {
//     wishlistItems: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToWishlist.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(addToWishlist.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         if (!action.payload.message.includes("already added to cart")) {
//           // Avoid adding the product if it is already in the wishlist
//           state.wishlistItems.push(action.payload.data); // Add to state if not already added
//         }
//       })
//       .addCase(addToWishlist.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload.message;
//       })
//       .addCase(removeFromWishlist.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(removeFromWishlist.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.wishlistItems = state.wishlistItems.filter(
//           (item) => item.productId._id !== action.meta.arg.productId
//         ); // Remove from state based on productId
//       })
//       .addCase(removeFromWishlist.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload.message;
//       });
//   },
// });

// export default wishlistSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const addToWishlist = createAsyncThunk(
  "cart/addToWishlist",
  async (item, { dispatch, rejectWithValue }) => {
    console.log(item, "item from cart");
    try {
      const response = await axiosInstance.post(
        "/whislist/createWhislist",
        item
      );
      console.log(response.data, "from redux toolkit data for wishlist");
      dispatch(fetchWishlisttItems());
      return response.data;
    } catch (error) {
      console.log(error, "error toolkit data");
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWishlisttItems = createAsyncThunk(
  "cart/fetchWishlistItems",
  async () => {
    try {
      const response = await axiosInstance.get("/whislist/getallWhislist");
      console.log(response.data, "Fetch Item form redux toolkit from wishlist");
      return response.data;
    } catch (error) {
      console.log(error, "error toolkit data");
      return error;
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "cart/removeFromWisshlist",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    console.log(productId, "item id from wishlist");
    try {
      const response = await axiosInstance.post("/whislist/deleteSingleItem", {
        productId,
      });
      console.log(response.data, "delete from reduxtoolkit");
      dispatch(fetchWishlisttItems());
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeAllWishlist = createAsyncThunk(
  "cart/removeAllWishlist",
  async (id, { dispatch, rejectWithValue }) => {
    console.log(id, "item id from cart");
    try {
      const response = await axiosInstance.delete(
        `/whislist/deleteWhislist/${id}`
      );
      console.log(response.data, "delete from reduxtoolkit");
      dispatch(fetchWishlisttItems());
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  error: null,
  wishlistItems: [],
  status: "idle",
  // couponCode: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.cartItems.push(action.payload);
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWishlisttItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlisttItems.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.wishlistItems = action.payload;
        // state.couponCode = action.payload.couponCode || null;
      })
      .addCase(fetchWishlisttItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        console.log(state, "statet from reject case");
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        console.log(state, "statelog");
        state.cartItems = state.cartItems?.filter(
          (item) => item?.productId?._id !== action.payload._id
        );
      })

      .addCase(removeAllWishlist.fulfilled, (state) => {
        state.status = "succeeded";
        state.cartItems = [];
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
