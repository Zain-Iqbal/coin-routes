import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

import walletSlice from "../features/wallet-slice";
import auth from "../features/auth-slice";
import nft from "../features/nft-slice";
import collection from "../features/collection-slice";
import user from "../features/user-slice";
import {apiSlice, apiSwapSlice} from "../features/api";

const apiMiddlewareList = [apiSlice.middleware, apiSwapSlice.middleware]

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiSwapSlice.reducerPath]: apiSwapSlice.reducer,
        walletSlice: walletSlice,
        nft: nft,
        auth: auth,
        collection: collection,
        user: user,

    },
    // devTools: process.env.REACT_APP_ENV === 'dev',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddlewareList),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch