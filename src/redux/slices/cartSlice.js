import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
      cartList: []
    },
    reducers: {},
    extraReducers: () => {}
  });
  
  export default CartSlice.reducer;