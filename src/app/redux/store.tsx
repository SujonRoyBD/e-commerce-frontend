import { configureStore } from "@reduxjs/toolkit";
import { cartsReducer } from "./features/carts/cartsSlice";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer : {
        carts : cartsReducer
    }
})

setupListeners(store.dispatch)