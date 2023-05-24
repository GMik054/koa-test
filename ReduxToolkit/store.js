import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {HeaderScroll} from "./Reducers/HeaderScroll";
import {ModalReducer} from "./Reducers/ModalReducer";
import {AddToCartReducer} from "./Reducers/AddtoCartReducer";
import {BlogReducer} from "./Reducers/BlogReducer";
import {PortfolioReducer} from "./Reducers/PortfolioReducer";
import {AllGridReducer} from "./Reducers/AllGridsReducer";
import {ProductFilter} from "./Reducers/ProductFilterReducer";
import {CommonReducer} from "./Reducers/AllReducer";
import {CurrencyReducer} from './Reducers/CurrencyReducer'
import {CompareReducer} from './Reducers/CompareReducer'
import {ThemeCustomizerReducer} from './Reducers/ThemeCustomizerReducer';
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
import storage from 'redux-persist/lib/storage'
import {LoginTokenSlice} from "./Slices/LoginSlice";



const rootReducer = combineReducers({
    HeaderScroll, ModalReducer, AddToCartReducer, BlogReducer, PortfolioReducer,
    AllGridReducer, ProductFilter, CommonReducer, CurrencyReducer, CompareReducer, ThemeCustomizerReducer,
    LoginTokenSlice:LoginTokenSlice.reducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["HeaderScroll", "ModalReducer", "AddToCartReducer", "BlogReducer", "PortfolioReducer",
        "AllGridReducer", "ProductFilter", "CommonReducer", "CurrencyReducer", "CompareReducer", "ThemeCustomizerReducer"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store)
// export default the store
export default store

// export const store = configureStore({
//     reducer: {
//         HeaderScroll, ModalReducer, AddToCartReducer, BlogReducer, PortfolioReducer,
//         AllGridReducer, ProductFilter, CommonReducer, CurrencyReducer, CompareReducer, ThemeCustomizerReducer
//     }
// })