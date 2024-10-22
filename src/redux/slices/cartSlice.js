import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Loading} from './settingSlice'

export const AddItemToCart = createAsyncThunk("AddItemToCart", async (payload, { dispatch }) => {
    dispatch(Loading(true))
    
    // Intentionally giving this setTimeout here, so that we can see loading state for 0.5 second. This is not mendatory. 
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    dispatch(Loading(false))
    return payload
})

const CartSlice = createSlice({
    name: "cart",
    initialState: {
      cartList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddItemToCart.fulfilled, (state, action) => {
            const payload = action.payload;
            // Ensure cartList is an array before pushing
            console.log(payload, state.cartList);
            state.cartList = [...state.cartList, payload]
        })
    }
  });
  
  export default CartSlice.reducer;