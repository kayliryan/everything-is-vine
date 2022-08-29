import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { salesApi } from './salesApi'
import { Store } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        [salesApi.reducerPath]: salesApi.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(salesApi.middleware),
})

setupListeners(store.dispatch);