import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";


export const fetchnewArrivalForMen = createAsyncThunk(
    "product/newarrivalformen",
    async()=>{
       try {
        const response = await axiosInstance.get(`/products/mensArrival`)
      
        return response.data;
       } catch (error) {
        console.log(error)
       }
        
    }
  )

  export const fetchnewArrivalForWomen = createAsyncThunk(
    "product/newarrivalforwomen",

    async()=>{
        try {
            const response = await axiosInstance.get(`/products/womenArrival`)
            console.log(response,"new arrival women product zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
  )


  const newArrivalSlice = createSlice({
    name: 'newArrival',
    initialState:{
        newArrivalForMen: [],
        newArrivalForWomen:[],
        status:"idle",
        error:null
},
    reducers:{
        reset:(state)=>{
            state.newArrivalForMen=[];
            state.newArrivalForWomen=[];
        }
    },
    extraReducer:(builder)=>{
        builder
        .addCase(fetchnewArrivalForMen.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchnewArrivalForMen.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.products = action.payload;
          })
          .addCase(fetchnewArrivalForMen.rejected,(state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
          })
          .addCase(fetchnewArrivalForWomen.pending, (state) => {
            state.status = "loading";
            })
            .addCase(fetchnewArrivalForWomen.fulfilled,(state,action)=>{
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchnewArrivalForWomen.rejected,(state,action)=>{
                state.status = "failed";
                state.error = action.error.message;
            })
          
    }
  });

  export const {reset} = newArrivalSlice.actions;
  export default newArrivalSlice.reducer;