import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../app/features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})