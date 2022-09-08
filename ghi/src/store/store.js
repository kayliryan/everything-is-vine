import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { salesApi } from './salesApi'
import cartReducer from './cartReducer';
import { combineReducers } from 'redux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
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
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(salesApi.middleware),
    });

export const persistor = persistStore(store)
