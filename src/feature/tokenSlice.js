import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState:{
        token: null
    },
    reducers:{
        setTokenData: (state, action) =>{
            state.token = action.payload;
        }
    }
})

export const { setTokenData } = tokenSlice.actions;
export default tokenSlice.reducer;