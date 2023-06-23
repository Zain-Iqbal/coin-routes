import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setModalId} from "../../features/detail-slice";
import useTheme from "../../theme/useThemeContext.hook";
import {modalIdSelector} from "../../selectors/detail-selector";
import {useGetTickerQuery} from "../../features/api/inject-endpoint-api";
import {FUNDING_DETAIL_LABELS, TRADING_DETAIL_LABELS} from "./constants";

const useTickerDetailModal = () => {
    const id = useSelector(modalIdSelector)
    const {isDark} = useTheme()
    const dispatch = useDispatch()
    const {data = [], isFetching = true} = useGetTickerQuery({symbols: id}, {refetchOnMountOrArgChange: true})
    const header = !!id && id[0] == 't' ? TRADING_DETAIL_LABELS : FUNDING_DETAIL_LABELS

    const closeModal = () => {
        const data = window.location
        const {origin = '', pathname = ''} = data
        const newPath = `${origin}${pathname}`
        window.history.replaceState(null, '', newPath)
        dispatch(setModalId(null))
    }

    return {id, isDark, data, isFetching, header, closeModal}
}


export default useTickerDetailModal

