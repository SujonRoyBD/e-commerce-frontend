import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartsReducer } from "./features/carts/cartSlice";
import { authReducer } from "./features/auth/authSlice";

// Store config
export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    auth: authReducer,
  },
});

setupListeners(store.dispatch);

// Infer type for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
