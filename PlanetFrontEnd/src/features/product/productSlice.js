import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import axiosInstance from "../../config/axiosInstance";
import qs from "qs";

// Async thunk to fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    try {
      const response = await axiosInstance.get(
        `/products?category=${category}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProductsBySubCategoryMale = createAsyncThunk(
  "products/fetchBysubCategoryMale",
  async (category) => {
    try {
      const response = await axiosInstance.get(
        `/products?category=${category}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    console.log(`Fetching product with id: ${productId}`);

    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      console.log(response, "response from product slice");
      console.log(`Fetched product: `, response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Make sure to rethrow the error for rejected action handling
    }
  }
);

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchProductsByFilters",
  async (filters) => {
    const queryString = qs.stringify(filters, { arrayFormat: "comma" });
    const response = await axiosInstance.get(`/products?${queryString}`);
    return response.data;
  }
);
export const getProductByFilterPrice = createAsyncThunk(
  "products/getProductByFilterPrice",
  async (filterByPrice) => {
    const queryString = qs.stringify(filterByPrice, { arrayFormat: "comma" });
    console.log(queryString, "queryString");
    const response = await axiosInstance.get(`/products?${queryString}`);
    console.log(response, "response in filter price");
    return response.data;
  }
);

// Thunk to fetch men’s products
export const fetchMenProducts = createAsyncThunk(
  "products/fetchMenProducts",
  async () => {
    try {
      const response = await axiosInstance.get(`/products?category=Male`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Thunk to fetch women’s products
export const fetchWomenProducts = createAsyncThunk(
  "products/fetchWomenProducts",
  async () => {
    try {
      const response = await axiosInstance.get(`/products?category=Female`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Thunk to fetch New Arrival for men

export const newArrivalForMen = createAsyncThunk(
  "product/newarrivalformen",
  async () => {
    try {
      const response = await axiosInstance.get(`/products/mensArrival`)
      console.log(response, "new Arrival")
      return response.data;
    } catch (error) {
      console.log(error)
    }


  }
)

// Write by Sushant
export const getSimilarProducts = createAsyncThunk(
  "product/getSimilarProducts",
  async (productId) => {
    try {
      const response = await axiosInstance.get(`/products/similar/${productId}`);
      console.log(response, "Similar Products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    menProducts: [], // Specific state for men’s products
    womenProducts: [], // Specific state for women’s products
    singleProduct: null, // State to store single product
    similarProducts: [], // State to store similar products
    mennewArrival: [],
    status: "idle",
    singleProductStatus: "idle", // State to track the status of single product fetching
    similarProductsStatus: "idle", // State to track the status of similar products fetching
    error: null,
    singleProductError: null, // State to store single product error
    similarProductsError: null, // State to store similar products error
  },
  reducers: {
    resetProducts: (state) => {
      state.products = [];
      state.similarProducts = []; // Reset similar products on reset
      state.status = "idle";
      state.similarProductsStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchProductsByCategory actions
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handle fetchProductsBySubCategoryMale actions

      .addCase(fetchProductsBySubCategoryMale.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsBySubCategoryMale.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menProducts = action.payload;
      })
      .addCase(fetchProductsBySubCategoryMale.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //fetch product for men
      .addCase(fetchMenProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menProducts = action.payload;
      })
      .addCase(fetchMenProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // fetch products for women
      .addCase(fetchWomenProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWomenProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.womenProducts = action.payload;
      })
      .addCase(fetchWomenProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Handle fetchProductById actions
      .addCase(fetchProductById.pending, (state) => {
        state.singleProductStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProductStatus = "succeeded";
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.singleProductStatus = "failed";
        state.singleProductError = action.error.message;
      })
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.status = "loading";
        state.products = [];
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.status = "failed";
        state.products = action.error.message;
      })
      .addCase(getProductByFilterPrice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductByFilterPrice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProductByFilterPrice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //new Arrival for men product
      .addCase(newArrivalForMen.pending, (state) => {
        state.status = "loading";
      })
      .addCase(newArrivalForMen.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newArrival = action.payload;
      })
      .addCase(newArrivalForMen.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Simler products
      .addCase(getSimilarProducts.pending, (state) => {
        state.similarProductsStatus = "loading"; // Set loading status
      })
      .addCase(getSimilarProducts.fulfilled, (state, action) => {
        state.similarProductsStatus = "succeeded"; // Set succeeded status
        state.similarProducts = action.payload.similarProducts; // Store similar products
      })
      .addCase(getSimilarProducts.rejected, (state, action) => {
        state.similarProductsStatus = "failed"; // Set failed status
        state.similarProductsError = action.error.message; // Store error message
      });
  },
});
export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProductsByCategory.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(fetchProductsByCategory.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default productsSlice.reducer;
