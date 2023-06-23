import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL, SWAP_BASE_URL} from "../../utils/constants";
import {RootState} from "../../app/store";


const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
        const address = (getState() as RootState).walletSlice.metaMaskWallet.signedAccount
        if (token && address) {
            headers.set('x-access-token', `${token}`)
            headers.set('x-visitor-address', `${address}`)
        }
        return headers
    },
})


const baseQueryGetHeaderToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryGetHeaderToken,
    tagTypes: ['collections', 'NFT', 'transactionHistory', 'offers', 'COLLECTION_NFT_LIST', 'Notifications', 'Cashback'],
    endpoints: builder => ({})
})



const swapBaseQuery = fetchBaseQuery({
    baseUrl: SWAP_BASE_URL,
})

export const apiSwapSlice = createApi({
    baseQuery: swapBaseQuery,
    reducerPath:'Swap',
    tagTypes: [],
    endpoints: builder => ({})
})
