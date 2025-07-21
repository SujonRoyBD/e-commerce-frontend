import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Product type definition
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartState {
  carts: CartItem[];
}

const initialState: CartState = {
  carts: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = state.carts.find((cart) => cart.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action: PayloadAction<{ id: string }>) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
} = cartsSlice.actions;

export const cartsReducer = cartsSlice.reducer;
