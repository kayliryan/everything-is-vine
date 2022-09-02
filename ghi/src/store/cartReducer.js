import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        deleteCartItem: (state, payload) => {
            console.log("deleting cart item")
            let index = payload.payload.index
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.cartItems.splice(index, 1);
            return newArray
        },
        addCartItem: (state, payload) => {
            console.log("added item to cart")
            // Need to add logic to check if item with same id exists in the cart
            // if so, make a call to a future function updateQuantity
            return {
            ...state,
            cartItems: [...state.cartItems, payload.payload]
        }},
        clearCart: (state) => {
                state.cartItems = []
        },
        updateQuantity: (state, payload) => {
                const newArray = JSON.parse(JSON.stringify(state))
                newArray.cartItems[payload.payload.index]["cust_quantity"] = payload.payload.cust_quantity
                console.log(newArray)
                return newArray
            
              // Leave every other item unchanged
            // return state;
        },
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
