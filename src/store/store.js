// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import HallReducer from "./slices/HallSlice.js";

export const store = configureStore({
    reducer: {
        hall: HallReducer
    }
});
