import {apiSlice} from './index'

export const Url_List = {
    getTickers: `/tickers`,
    getTicker: `/ticker`,
    getCandles: `/candles`,
}

export const injectEndpointApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTickers: builder.query({
            query: (data) => ({
                url: `${Url_List.getTickers}?symbols=${data.symbols}`,
                method: 'GET',
            }),
        }),
        getTicker: builder.query({
            query: (data) => ({
                url: `${Url_List.getTicker}/${data.symbols}`,
                method: 'GET',
            }),
        }),
        getCandles: builder.query({
            query: (data) => ({
                url: `${Url_List.getCandles}/${data.req}`,
                method: 'GET',
            }),
        }),
    }),
})

export const {
    useGetTickersQuery,
    useGetTickerQuery,
    useGetCandlesQuery
} = injectEndpointApi

