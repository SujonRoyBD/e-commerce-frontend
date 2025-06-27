import { createSlice } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
    name : 'carts', 
    initialState : {
        carts : []
    },
    reducers : {
        addToCart(state, action){
            const item = state.carts.find((cart)=> cart.id === action.payload.id)
            if(item){
                item.quantity ++
            }
            else{
                state.carts.push({...action.payload , quantity : 1})
            }
        },
        removeCart(state, action){
            state.carts = state.carts.filter((cart)=>cart.id !== action.payload.id)
        },
        incrementQuantity(state, action){
            const item = state.carts.find((cart)=>cart.id === action.payload)
            if(item){
                item.quantity ++
            }
        },
        decrementQuantity(state, action){
            const item = state.carts.find((cart)=>cart.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity --
            }
        }
    }
})

export const { addToCart, removeCart, incrementQuantity, decrementQuantity} = cartsSlice.actions
export const cartsReducer = cartsSlice.reducer