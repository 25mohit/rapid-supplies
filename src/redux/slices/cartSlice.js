import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AddItemToCart = createAsyncThunk("AddItemToCart", async (payload, { dispatch }) => {
    alert("Added")

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
            const payload = action.payload
            state.cartList = payload;
        })
    }
  });
  
  export default CartSlice.reducer;