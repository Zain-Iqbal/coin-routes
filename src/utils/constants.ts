import {askIcon, bidIcon, gridIcon} from "../screens/home/components/svg-icons";

 export const BASE_URL = `https://api.pro.coinbase.com`

export const FULL_ORDER_BOOK_SIZE = 24
export const HALF_ORDER_BOOK_SIZE =10

export enum OrderBookView {
    grid='grid',
    bid='bid',
    ask='ask'
}

export const IconsData = [{type: OrderBookView.grid, icon: gridIcon},
    {type: OrderBookView.ask, icon: askIcon},
    {type: OrderBookView.bid, icon: bidIcon}
]

export const AGGR_LIST = [0.01, 0.1, 1, 10, 100]

export const Currencies = ['BTC-USD', 'ETH-USD', 'LTC-USD', 'BCH-USD']


