import { configureStore } from "@reduxjs/toolkit";
import token from "../feature/tokenSlice";

export default configureStore({
    reducer: {
        token: token,
    }
})