import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartItems: []}
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, payload) => {
            console.log("added item to cart")
            // Need to add logic to check if item with same id exists in the cart
            // if so, make a call to a future function updateQuantity
            return {
                ...state,
                cartItems: [...state.cartItems, payload.payload]
            }},
        updateQuantity: (state, payload) => {
            console.log("updating quantity")
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.cartItems[payload.payload.index]["cust_quantity"] = payload.payload.cust_quantity
            return newArray
        },
        deleteCartItem: (state, payload) => {
            console.log("deleting cart item")
            let index = payload.payload.index
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.cartItems.splice(index, 1);
            return newArray
        },
        clearCart: () => initialState,
        // default: () => {
        //     return {
        //         ...state,
        //         // cartItems
        //     }
        // }
    }
});

// Action creators are generated for each case reducer function
export const { addCartItem , deleteCartItem, clearCart, updateQuantity } = cartSlice.actions;

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
