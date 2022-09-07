import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {billingInfo: []}

export const billingSlice = createSlice({
    name: "billing",
    initialState: initialState,
    reducers: {
        addBillingInfo: (state, payload) => {
                return {
                    ...state,
                    billingInfo: [...state.billingInfo, payload.payload]
            }},
        
        clearBillingInfo: () => initialState,
            
    }
});

export const { addBillingInfo, clearBillingInfo } = billingSlice.actions;
export default billingSlice.reducer;