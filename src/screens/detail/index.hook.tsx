import React from "react";
import {useGetTickersQuery} from "../../features/api/inject-endpoint-api";

import './styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {setModalId} from "../../features/detail-slice";
import {modalIdSelector} from "../../selectors/detail-selector";

const PAGE_TITLE = `Tickers`
const PAGE_DESCRIPTION = `The tickers endpoint provides a high level overview of the state of the
                market. It shows the current best bid and ask, the last traded price, as well as information on the
                daily volume and price movement over the last day. The endpoint can retrieve multiple tickers with a
                single query.`
const useHome = () => {
    const dispatch = useDispatch()
    const id = useSelector(modalIdSelector)
    const {data = [], isFetching = true} = useGetTickersQuery({symbols: 'ALL'}, {refetchOnMountOrArgChange: true})

    const detailModalHandler = (value: string) => {
        const data = window.location
        const {origin = '', pathname = ''} = data
        const newPath = `${origin}${pathname}?id=${value}`
        window.history.replaceState(null, '', newPath)
        dispatch(setModalId(value))
    }

    return {pageDescription: PAGE_DESCRIPTION, pageTitle: PAGE_TITLE, data, isFetching, detailModalHandler, id}
}

export default useHome
