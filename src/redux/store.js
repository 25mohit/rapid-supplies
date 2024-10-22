import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartReducer from './slices/cartSlice'
import ProductReducer from './slices/productSlice'
import SettingReducer from './slices/settingSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
  cart: CartReducer,
  product: ProductReducer,
  setting: SettingReducer
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