import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Loading = createAsyncThunk("Loading", async (payload, { dispatch }) => {
   return payload
})

const SettingSlice = createSlice({
    name: "setting",
    initialState: {
      loadingState: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Loading.fulfilled, (state, action) => {
            const payload = action.payload
            state.loadingState = payload;
        })
    }
  });
  
  export default SettingSlice.reducer;