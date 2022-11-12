import { combineReducers } from "redux";
import { authentReducer } from "./authentReducer";
import { dataUserReducer } from "./dataUserReducer";


export const combinReducer = combineReducers({
    auth: authentReducer,
    userData: dataUserReducer
})