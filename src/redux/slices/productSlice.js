import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsList } from "../../moc_data/Products";
import {Loading} from './settingSlice'
import axios from "axios";
import { toast } from "react-toastify";

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
export const UpdateProductInCart = createAsyncThunk(
    "UpdateProductInCart",
    async (payload, { getState }) => {
      const state = getState();
      const productList = state.product.productList;
  
      // Update the product list to mark the product as "in cart"
      const updatedList = productList.map((product) => {
        if (product.id === payload.id) {
          return { ...product, inCart: payload.action }; // Mark the product as in cart
        }
        return product;
      });
  
      return updatedList;
    }
  );

export const SaveProductReview = createAsyncThunk("SaveProductReview", async (payload, { dispatch }) => {
    dispatch(Loading(true))
    
    // Intentionally giving this setTimeout here, so that we can see loading state for 1 second. This is not mendatory. 
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Review added Successfully");
    dispatch(Loading(false))
    
    return payload
    
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
        builder.addCase(UpdateProductInCart.fulfilled, (state, action) => {
            state.productList = action.payload; // Update the product list
          });
        builder.addCase(SaveProductReview.fulfilled, (state, action) => {
            const payload = action.payload
            const newList = state.productList.map(preProd => {
                if(preProd.id === payload.id){
                    return {...preProd, reviews: [...preProd.reviews, payload]}
                } else {
                    return preProd
                }
            })
            state.productList = newList
            console.log("newList", state.productList, newList, payload)
            // state.productList 
        })

    }
  });
  
  export default ProductSlice.reducer;