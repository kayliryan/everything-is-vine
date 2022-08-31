import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { salesApi } from './salesApi'
// import { cartApi } from './cartApi'


export const store = configureStore({
    reducer: {
        [salesApi.reducerPath]: salesApi.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(salesApi.middleware),
});

setupListeners(store.dispatch);