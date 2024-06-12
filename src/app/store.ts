import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

import {apiSlice} from "../features/api";
import main from "../features/main-slice";


const apiMiddlewareList = [apiSlice.middleware]

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        main: main
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddlewareList),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
