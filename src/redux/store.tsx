import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartsReducer } from "./features/carts/cartSlice";

// Store তৈরি
export const store = configureStore({
  reducer: {
    carts: cartsReducer,
  },
});

// Optional: refetchOnFocus/refetchOnReconnect এর জন্য
setupListeners(store.dispatch);

// Infer type for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
