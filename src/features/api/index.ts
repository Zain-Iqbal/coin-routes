import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "../../utils/constants";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        headers.set('Accept','application/json')
        headers.set('Content-Type','application/json')
        return headers;
    },
})


const baseQueryGetHeaderToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryGetHeaderToken,
    tagTypes: ['OrderBook'],
    endpoints: builder => ({})
})
