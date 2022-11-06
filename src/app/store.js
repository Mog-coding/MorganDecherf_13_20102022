import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../feature/tokenSlice";

export default configureStore({
    reducer: {
        token: tokenReducer,
    }
})