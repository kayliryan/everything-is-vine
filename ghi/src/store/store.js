import { configureStore } from '@reduxjs/toolkit'
import { salesApi } from './salesApi'
import cartReducer from './cartReducer';
import { combineReducers } from 'redux'
import { persistStore, persistReducer, REGISTER, REHYDRATE, PERSIST } from 'redux-persist'
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
        serializableCheck: {
            ignoredActions: [REGISTER, REHYDRATE, PERSIST],
            ignoredActionPaths: [REGISTER, REHYDRATE, PERSIST],
            ignoredPaths: [REGISTER, REHYDRATE, PERSIST],
        },
});

export const persistor = persistStore(store)
