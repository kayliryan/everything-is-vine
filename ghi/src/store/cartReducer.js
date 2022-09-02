import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItem: (state, payload) => {
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
                // Return a new object
                // console.log("state", state)
                // console.log(payload.payload)
                // const index = state.cartItems.findIndex(cartItem => cartItem.id !== action.payload);
                const newArray = JSON.parse(JSON.stringify(state))
                console.log(payload.payload)
                console.log("***", newArray.cartItems[payload.payload.index].cust_quantity)
                // console.log(newArray.cartItems[index])
                newArray.cartItems[payload.payload.index].cust_quantity = payload.payload.cust_quantity
                console.log(newArray)
                // return {
                //     ...state,
                //     cartItems: newArray
                // }
                // return {
                //   ...state,  // copy the existing item
                //   cartItems: [...state.cartItems[index].cust_quantity = payload.payload]  // replace the email addr
                // }
            
              // Leave every other item unchanged
            // return state;
        },
        
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

