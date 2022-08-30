const initialState = {
    cartItems: []
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'cartItemAdded': {
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
