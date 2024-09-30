import { configureStore } from "@reduxjs/toolkit";
// import wishlistReducer from "./features/wishlist/wishlistSlice";
import productSlice from "./features/product/productSlice";
// import authSlice from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice";
import wishlistSlice from "./features/wishlist/wishlistSlice";
import buyNowSlice from "./features/BuyNow/buyNowSlice";
import createOrderSlice from "./features/createOrder/createOrderSlice";
import newArrivalSlice from "./features/product/newArrivalSlice";
import searchSlice from "./features/search/searchSlice";
import authSlice from "./features/auth/authSlice";
import orderSlice from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: productSlice,
    buynow: buyNowSlice,
    createOrder: createOrderSlice,
    newArrival: newArrivalSlice,
    serach: searchSlice,
    order: orderSlice,
  },
});
