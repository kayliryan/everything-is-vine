export const ADD_CART_ITEM = "ADD_CART_ITEM";

// export const addCartItem = () => async (dispatch, getState) => {
//     return dispatch({
//         type: ADD_CART_ITEM,
//         payload: dataCopy,
//       });
// };

export function addCartItem(dataCopy) {
    return function (dispatch) {
        dispatch({
            type: ADD_CART_ITEM,
            payload: dataCopy,
        });
    }
};
