import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useGetTickersQuery} from "../../features/api/inject-endpoint-api";
import {useDispatch, useSelector} from "react-redux";
import {setModalId} from "../../features/detail-slice";
import {modalIdSelector} from "../../selectors/detail-selector";
import {ROUTES} from "../../routes";
import useSearchParams from "../../hooks/search-params";

const PAGE_TITLE = `Tickers`
const PAGE_DESCRIPTION = `The tickers endpoint provides a high level overview of the state of the
                market. It shows the current best bid and ask, the last traded price, as well as information on the
                daily volume and price movement over the last day. The endpoint can retrieve multiple tickers with a
                single query.`
const useHome = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const urlId = useSearchParams('id')


    const id = useSelector(modalIdSelector)
    const {data = [], isFetching = true} = useGetTickersQuery({symbols: 'ALL'}, {refetchOnMountOrArgChange: true})

    const detailModalHandler = (value: string, isDetail = false, event = null) => {
        if (!!event) {
            event.stopPropagation()
        }
        if (!isDetail) {
            const data = window.location
            const {origin = '', pathname = ''} = data
            const newPath = `${origin}${pathname}?id=${value}`
            window.history.replaceState(null, '', newPath)
            dispatch(setModalId(value))
        } else {
            history(`${ROUTES.detail}/${value}`)
        }
    }

    useEffect(()=>{
        if(!!urlId){
            dispatch(setModalId(urlId))
        }
    },[urlId])

    return {pageDescription: PAGE_DESCRIPTION, pageTitle: PAGE_TITLE, data, isFetching, detailModalHandler, id}
}

export default useHome
