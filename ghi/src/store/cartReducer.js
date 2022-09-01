import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItem: (state, payload) => {
            return {
            ...state,
            cartItems: [...state.cartItems, payload.payload]
        }},
        clearCart: (state) => {
                state.cartItems = []
        }
        // deleteCartItem: (state) => {
        //     const filteredCartItems = 
        //     state.cartItems.filter(cartItem => cartItem.id !== action.payload) 
        //     return {
        //         ...state,
        //         cartItems: filteredCartItems
        //     }
        // }
    }
});

// Action creators are generated for each case reducer function
export const { addCartItem , deleteCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

//         case 'cartItemDeleted': {
//             const filteredCartItems = 
//             state.cartItems.filter(cartItem => cartItem.id !== action.payload) 
//                     return {
//                         ...state,
//                         cartItems: filteredCartItems
//                     }
//                 }
                
            
//         case 'updateQuantity': {
//             const index = state.cartItems.findIndex(cartItem => cartItem.id !== action.payload);
//             const newArray = [...state.cartItems];
//             //need to add but change below
//             // newArray[quantity] = NEED TO GRAB THIS NUMBER
//             return {
//                 ...state, cartItems: newArray
//             }
//         }
//         default:
//             return state
