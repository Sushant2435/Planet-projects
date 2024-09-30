import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

// signup
export const signUp = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("userDetails/signup", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// sign in
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("userDetails/login", data);
      console.log(response, "response from Auth Slice");
      // Store user's token in local storage
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // signUp
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../config/axiosInstance";
// // Send phone number for OTP
// export const sendPhoneNumber = createAsyncThunk(
//   "auth/sendPhoneNumber",
//   async (phone, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post("user/phone-login", { phone });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// // Verify OTP
// export const verifyOtp = createAsyncThunk(
//   "auth/verifyOtp",
//   async ({ phone, details, otp }, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post("user/phone-verify", {
//         phone,
//         details,
//         otp,
//       });
//       // Store user's token in local storage
//       localStorage.setItem("token", response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// // Initial state
// const initialState = {
//   phone: null,
//   loading: false,
//   error: null,
//   token: localStorage.getItem("token") || null,
//   otpSent: false,
//   otpDetails: null,
// };
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.phone = null;
//       state.otpSent = false;
//       state.otpDetails = null;
//       state.token = null;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Send phone number for OTP
//       .addCase(sendPhoneNumber.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(sendPhoneNumber.fulfilled, (state, action) => {
//         state.loading = false;
//         state.otpSent = true;
//         state.otpDetails = action.payload;
//         state.phone = action.payload;
//       })
//       .addCase(sendPhoneNumber.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // Verify OTP
//       .addCase(verifyOtp.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(verifyOtp.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         state.otpSent = false;
//         state.otpDetails = null;
//         state.phone = action.payload;
//       })
//       .addCase(verifyOtp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//       });
//   },
// });
// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
