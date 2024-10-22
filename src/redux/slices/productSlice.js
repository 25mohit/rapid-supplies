import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsList } from "../../moc_data/Products";
import {Loading} from './settingSlice'
import axios from "axios";

export const FetchProducts = createAsyncThunk("FetchProducts", async (payload, { dispatch }) => {
    dispatch(Loading(true))
    try {
        const data = await axios.get('https://resume-backend-production.up.railway.app/products')
        dispatch(Loading(false))
        return data?.data?.data
    } catch (error) {
        dispatch(Loading(false))
        console.log(error);
    }
    
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