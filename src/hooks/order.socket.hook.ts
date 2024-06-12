import {useEffect} from "react";
import useWebSocket from 'react-use-websocket';
import {useDispatch, useSelector} from "react-redux";

import {setConnection, setTicker, updateSnapshotData} from '../features/main-slice';
import {isConnectedStateSelector} from "../selectors/main-selector";

const useOrderSocket = () => {
    const dipatch = useDispatch()
    const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket("wss://ws-feed.pro.coinbase.com");

    const isConnected = useSelector(isConnectedStateSelector)

    const subscribeMessage = (type, sub = true) => ({
        type: sub ? 'subscribe' : 'unsubscribe',
        product_ids: [type],
        channels: ['level2_batch', 'ticker']
    })

    const subscribeOrderBook = (type) => {
        if (!isConnected) {
            sendJsonMessage(subscribeMessage(type))
            dipatch(setConnection(true))
        }
    }

    const unSubscribeOrderBook = (type) => {
        if (isConnected) {
            sendJsonMessage(subscribeMessage(type, false))
            dipatch(setConnection(false))
        }
    }

    useEffect(() => {
        if (!!lastJsonMessage && lastJsonMessage.type === 'l2update') {
            dipatch(updateSnapshotData(lastJsonMessage))
        }
        if (!!lastJsonMessage && lastJsonMessage.type === 'ticker') {
            dipatch(setTicker(lastJsonMessage))
        }

    }, [readyState, lastJsonMessage])

    return {subscribeOrderBook, unSubscribeOrderBook, isConnected}
}

export default useOrderSocket
