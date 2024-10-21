import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartReducer from './slices/cartSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
  cart: CartReducer
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistState = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer : persistState, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store)