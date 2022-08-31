import { ADD_CART_ITEM } from "./actions"

const initialState = {
    cartItems: []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        // case ADD_CART_ITEM: {
        case ADD_CART_ITEM: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
                
            }
        }
        case 'cartItemDeleted': {
            const filteredCartItems = 
            state.cartItems.filter(cartItem => cartItem.id !== action.payload) 
                    return {
                        ...state,
                        cartItems: filteredCartItems
                    }
                }
                
            
        case 'updateQuantity': {
            const index = state.cartItems.findIndex(cartItem => cartItem.id !== action.payload);
            const newArray = [...state.cartItems];
            //need to add but change below
            // newArray[quantity] = NEED TO GRAB THIS NUMBER
            return {
                ...state, cartItems: newArray
            }
        }
        default:
            return state

    }
}

// some of the above may be wrong. when testing refer to 
// the below for additional logic
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers


// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cartItems: []
//     },
//     reducers: {
//         addCartItem: (state) => {
//             return {
//             ...state,
//             cartItems: [...state.cartItems, action.payload]
//         }},
//         deleteCartItem: (state) => {
//             const filteredCartItems = 
//             state.cartItems.filter(cartItem => cartItem.id !== action.payload) 
//             return {
//                 ...state,
//                 cartItems: filteredCartItems
//             }
//         }
//     }
// });

// // Action creators are generated for each case reducer function
// export const { addCartItem , deleteCartItem } = cartSlice.actions;

// export default cartSlice.reducer;
