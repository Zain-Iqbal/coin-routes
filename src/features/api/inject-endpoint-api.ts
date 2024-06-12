import {apiSlice} from './index'
import {setSnapshotData, setTicker} from "../main-slice";

export const Url_List = {
    orders: `/products/`,
    level2: `?level=2`,
    orderbook: `/book`
}

export const injectEndpointApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrderBook: builder.query({
            query: (data) => ({
                url: `${Url_List.orders}${data.type}${Url_List.orderbook}${Url_List.level2}`,
                method: 'GET',
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onOrderBookQueryFullFilled(payload, {
                    dispatch,
                    queryFulfilled,
                });
            },
        }),
    }),
})

export const {
    useGetOrderBookQuery
} = injectEndpointApi


export const onOrderBookQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        dispatch(setTicker({clear: true}))
        const {data: result} = await queryFulfilled
        dispatch(setSnapshotData(result))
    } catch (err) {
        console.log({err})
    }
}

