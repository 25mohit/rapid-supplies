import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignInUser = createAsyncThunk("SignInUser", async (payload, { dispatch }) => {
    alert("Success")
    const response = {
        message: "Successfully Logged In",
        status: true
    }
   return response
})

const CartSlice = createSlice({
    name: "cart",
    initialState: {
      cartList: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SignInUser.fulfilled, (state, action) => {
            const payload = action.payload
            state.cartList = payload;
        })
    }
  });
  
  export default CartSlice.reducer;