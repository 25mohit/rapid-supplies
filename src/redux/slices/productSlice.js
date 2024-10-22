import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PorductsList } from "../../moc_data/Products";

export const FetchProducts = createAsyncThunk("FetchProducts", async (payload, { dispatch }) => {
    // alert("Success")
    
   return PorductsList
})

const ProductSlice = createSlice({
    name: "product",
    initialState: {
      productList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchProducts.fulfilled, (state, action) => {
            const payload = action.payload
            state.productList = payload;
        })
    }
  });
  
  export default ProductSlice.reducer;