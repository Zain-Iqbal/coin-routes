import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    askTotalDataStateSelector,
    bidTotalDataStateSelector,
} from "../../../../selectors/main-selector";
import {AGGR_LIST, OrderBookView} from "../../../../utils/constants";
import {useGetOrderBookQuery} from "../../../../features/api/inject-endpoint-api";
import useOrderSocket from "../../../../hooks/order.socket.hook";
import {aggrData} from "../../../../features/main-slice";

import './styles.scss'

const useOrderBook = (props) => {
    const {type, prevType} = props
    const dispatch = useDispatch()
    const {subscribeOrderBook, unSubscribeOrderBook, isConnected} = useOrderSocket()
    const {isFetching, isSuccess} = useGetOrderBookQuery({type: type}, {refetchOnMountOrArgChange: true})
    const askTotal = useSelector(askTotalDataStateSelector)
    const bidTotal = useSelector(bidTotalDataStateSelector)
    const [listType, setListType] = useState(OrderBookView.grid)
    const [aggrValue, setAggrValue] = useState(AGGR_LIST[0])

    const value = Math.abs(askTotal / (askTotal + bidTotal) * 100) % 100
    const isGrid = listType === OrderBookView.grid
    const ShowOrderFooter = isGrid && !isFetching
    const ShowBid = listType === OrderBookView.bid || isGrid && !isFetching
    const ShowAsk = listType === OrderBookView.ask || isGrid && !isFetching

    useEffect(() => {
        if (isSuccess) {
            unSubscribeOrderBook(prevType)
            subscribeOrderBook(type)
        }
    }, [isSuccess])


    useEffect(() => {
        dispatch(aggrData({aggrValue}))
    }, [aggrValue])

    return {
        listType,
        setListType,
        aggrValue,
        setAggrValue,
        ShowBid,
        ShowAsk,
        isGrid,
        ShowOrderFooter,
        value,
        isFetching
    }
}

export default useOrderBook
