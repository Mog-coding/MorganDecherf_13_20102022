import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState:{
        tokenJwt: null
    },
    reducers:{
        setTokenData: (state, action) =>{
            state.tokenJwt = action.token;
        }
    }
})

export const { setTokenData } = tokenSlice.actions;
export default tokenSlice.reducer;