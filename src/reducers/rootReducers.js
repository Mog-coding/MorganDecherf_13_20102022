import { combineReducers } from 'redux';
import { authentReducer } from './authentReducer';
import { dataProfileReducer } from './dataProfileReducer';

export const rootReducer = combineReducers({
    auth: authentReducer,
    userData: dataProfileReducer,
});