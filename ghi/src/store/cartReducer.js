import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {cartItems: []}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, payload) => {
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload.payload]
            }},

        updateQuantityFromDetailsPage: (state, payload) => {
            let index = payload.payload.index
            let add_cust_quantity = payload.payload.add_cust_quantity
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.cartItems[index]["cust_quantity"] += add_cust_quantity
            return newArray
        },

        updateQuantityFromShoppingCart: (state, payload) => {
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.cartItems[payload.payload.index]["cust_quantity"] = payload.payload.cust_quantity
            return newArray
        },

        deleteCartItem: (state, payload) => {
            let index = payload.payload.index
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.cartItems.splice(index, 1);
            return newArray
        },

        clearCart: () => initialState,
    }
});

// Action creators are generated for each case reducer function
export const { addCartItem , deleteCartItem, clearCart, updateQuantityFromDetailsPage, updateQuantityFromShoppingCart } = cartSlice.actions;

export default cartSlice.reducer;

//To access state use current(state)