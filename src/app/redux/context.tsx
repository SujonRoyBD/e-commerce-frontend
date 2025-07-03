"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

export interface CartItem {
  id: number
  img: string
  title: string
  street: string
  season: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREMENT_ITEM"; payload: number }
  | { type: "DECREMENT_ITEM"; payload: number }
  | { type: "CLEAR_CART" }

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        }
      } else {
        const newItem = { ...action.payload, quantity: 1 }
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        }
      }
    }

    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find((item) => item.id === action.payload)
      if (!itemToRemove) return state

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      }
    }

    case "INCREMENT_ITEM": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
      )
      const item = state.items.find((item) => item.id === action.payload)
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + (item?.price || 0),
      }
    }

    case "DECREMENT_ITEM": {
      const item = state.items.find((item) => item.id === action.payload)
      if (!item || item.quantity <= 1) return state

      const updatedItems = state.items.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item,
      )

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - item.price,
      }
    }

    case "CLEAR_CART":
      return initialState

    default:
      return state
  }
}

interface CartContextType {
  state: CartState
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  incrementItem: (id: number) => void
  decrementItem: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item: Omit<CartItem, "quantity">) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const incrementItem = (id: number) => {
    dispatch({ type: "INCREMENT_ITEM", payload: id })
  }

  const decrementItem = (id: number) => {
    dispatch({ type: "DECREMENT_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
