import { combineReducers } from "@reduxjs/toolkit"
import * as exampleReducer from './example.reducer';
export default combineReducers({
    ...exampleReducer,
})
