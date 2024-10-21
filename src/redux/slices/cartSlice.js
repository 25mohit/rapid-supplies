import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignInUser = createAsyncThunk("SignInUser", async (payload, { dispatch }) => {
    alert("Success")
    const response = {
        message: "Successfully Logged In",
        status: true
    }
   return response
})

export const AddItemToCart = createAsyncThunk("SignInUser", async (payload, { dispatch }) => {
    alert("Added")

   return payload
})

const CartSlice = createSlice({
    name: "cart",
    initialState: {
      cartList: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddItemToCart.fulfilled, (state, action) => {
            const payload = action.payload
            state.cartList = payload;
        })
    }
  });
  
  export default CartSlice.reducer;