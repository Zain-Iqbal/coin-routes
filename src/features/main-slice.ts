import {createSlice} from '@reduxjs/toolkit'

import {aggrDataAddHandler, dataAddHandler, dataUpdateHandler} from "../utils/helpers";
import {IMainSlice} from "../interface";

const DEFAULT_TICKER= {
    best_ask: '',
    best_ask_size: '',
    best_bid: '',
    best_bid_size: '',
    high_24h: '',
    last_size: '',
    low_24h: '',
    open_24h: '',
    price: '',
    product_id: '',
    side: '',
    time: '',
    type: '',
    volume_24h: '',
    volume_30d: '',
}

const initialSate: IMainSlice = {
    isConnected: false,
    aggrValue: 0.01,
    snapshotData: {
        type: '',
        asks: {},
        bids: {},
        askMarketTotal: 0,
        askLength: 0,
        bidMarketAvg: 0,
        bidMarketTotal: 0,
        bidLength: 0,
    },
    tickerList: [],
    ticker: DEFAULT_TICKER

}

export const detailSlice = createSlice({
    name: 'mainSlice',
    initialState: initialSate,
    reducers: {
        setConnection: (state, action) => {
            const payload = !!action && action.payload !== undefined ? action.payload : false
            state.isConnected = payload
        },
        setTicker: (state, action) => {
            const payload = action.payload
            const {clear= false}= payload
            if(clear){
                state.tickerList = []
                state.ticker = DEFAULT_TICKER
            }else{
                state.tickerList = [...state.tickerList.slice(0,20), payload]
                state.ticker = payload
            }

        },
        aggrData: (state, action) => {
            const {aggrValue} = action.payload
            const prevAggrValue = state.aggrValue
            if (aggrValue === prevAggrValue) {
                return
            }
            let asks = {...state.snapshotData.asks}
            let bids: any = {...state.snapshotData.bids}
            const {list: askList, length: askLength, total: askMarketTotal} = aggrDataAddHandler(asks, aggrValue)
            const {list: bidList, length: bidLength, total: bidMarketTotal} = aggrDataAddHandler(bids, aggrValue)
            state.aggrValue = aggrValue
            state.snapshotData = {
                ...state.snapshotData,
                asks: askList,
                bids: bidList,
                askMarketTotal,
                bidMarketTotal,
                askLength,
                bidLength
            }
        },
        setSnapshotData: (state, action) => {
            if (!!action && action.payload !== undefined) {
                const {
                    asks = [],
                    bids = [],
                    ...rest
                } = action.payload

                const {list: askList, length: askLength, total: askMarketTotal} = dataAddHandler(asks)
                const {list: bidList, length: bidLength, total: bidMarketTotal} = dataAddHandler(bids)
                state.snapshotData = {
                    ...rest,
                    asks: askList,
                    bids: bidList,
                    askMarketTotal,
                    bidMarketTotal,
                    askLength,
                    bidLength
                }
            }
        },
        updateSnapshotData: (state, action) => {
            if (!!action && action.payload !== undefined) {
                const {changes} = action.payload
                if (!!!state.snapshotData.asks || !!!state.snapshotData.bids) {
                    return
                }

                let aggrValue = state.aggrValue
                let askList = {...state.snapshotData.asks}
                let bidList: any = {...state.snapshotData.bids}
                let askMarketTotal = Number(state.snapshotData.askMarketTotal)
                let bidMarketTotal = Number(state.snapshotData.bidMarketTotal)
                let askLength = state.snapshotData.askLength
                let bidLength = state.snapshotData.bidLength

                changes.forEach(item => {
                    if (item[0] === 'buy') {
                        const {
                            length,
                            total
                        } = dataUpdateHandler(item, bidLength, bidMarketTotal, bidList, 'buy', aggrValue)
                        askLength = length
                        askMarketTotal = total
                    } else {
                        const {
                            length,
                            total
                        } = dataUpdateHandler(item, askLength, askMarketTotal, askList, 'sell', aggrValue)
                        bidLength = length
                        bidMarketTotal = total
                    }
                })
                state.snapshotData = {
                    ...state.snapshotData,
                    asks: askList,
                    bids: bidList,
                    askMarketTotal,
                    bidMarketTotal,
                    askLength,
                    bidLength
                }
            }
        },
    },

})

export const {
    setConnection,
    setTicker,
    aggrData,
    setSnapshotData,
    updateSnapshotData
} = detailSlice.actions

export default detailSlice.reducer
