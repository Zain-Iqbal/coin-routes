export interface IMainSlice {
    isConnected: boolean
    aggrValue: number
    snapshotData: {
        type: string
        asks: {}
        bids: {}
        askMarketTotal: number,
        askLength: number,
        bidMarketAvg: number,
        bidMarketTotal: number,
        bidLength: number,
    },
    ticker: ITicker,
    tickerList: ITicker[]
}

export interface ITicker {
    best_ask: string,
    best_ask_size: string
    best_bid: string
    best_bid_size: string
    high_24h: string
    last_size: string
    low_24h: string
    open_24h: string
    price: string
    product_id: string
    sequence?: number
    side: string
    time: string
    trade_id?: number
    type: string
    volume_24h: string
    volume_30d: string
}

export interface ICard {
    title: string
    priceTitle: string
    price: string
    sizeTitle: string
    size: string
    color: string
    type: string
}
