import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { salesApi } from './salesApi'
import cartReducer from './cartReducer';
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const reducers = combineReducers({
    [salesApi.reducerPath]: salesApi.reducer,
    cart:cartReducer,
});

const persistConfig = {
    blacklist: ["sales"],
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(salesApi.middleware),
        serializableCheck: false,
});

export const persistor = persistStore(store)


////////Second Attempt
// export default () => {
//     let {store} = configureStore({
//         reducer: persistedReducer,
//         middleware: getDefaultMiddleware => 
//             getDefaultMiddleware().concat(salesApi.middleware),
//     });
//     let persistor = persistStore(store)
//     return {store, persistor}
// }
////////End of Second Attempt

// export const store = configureStore({
//     reducer: {
//         [salesApi.reducerPath]: salesApi.reducer,
//         cart:cartReducer,
//         // [cartReducer.reducerPath]: 
//     },
//     middleware: getDefaultMiddleware => 
//         getDefaultMiddleware().concat(salesApi.middleware),
// });

// setupListeners(store.dispatch);

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartReducer";
// import 

// export const store = configureStore({
//   reducer: {
//     cart:cartReducer,
//   }
// });
