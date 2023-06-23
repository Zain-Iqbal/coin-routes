import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

import {apiSlice} from "../features/api";
import detail from "../features/detail-slice";


const apiMiddlewareList = [apiSlice.middleware]

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        detail: detail
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddlewareList),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
