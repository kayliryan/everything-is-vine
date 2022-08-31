import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { salesApi } from './salesApi'


export const store = configureStore({
    reducer: {
        [salesApi.reducerPath]: salesApi.reducer,
        // [cartReducer.reducerPath]: 
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(salesApi.middleware),
});

setupListeners(store.dispatch);

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartReducer";
// import 

// export const store = configureStore({
//   reducer: {
//     cart:cartReducer,
//   }
// });
