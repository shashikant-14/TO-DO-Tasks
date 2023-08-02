import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from './slice/task'

const reducer = combineReducers({
    task:taskSlice
});
const store = configureStore({reducer});

export default store;