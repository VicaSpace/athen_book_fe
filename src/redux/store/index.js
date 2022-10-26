import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import counterReducer from '../slices/counterSlice'
import generalInformationReducer from '../slices/generalInformationSlice'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    counter: counterReducer,
    generalInformation: generalInformationReducer
})

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ["auth"], // should uncomment after auth slice added
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

