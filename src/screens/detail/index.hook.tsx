import React, {useEffect, useState} from "react";
import {useGetCandlesQuery} from "../../features/api/inject-endpoint-api";

import {useDispatch} from "react-redux";
import {setModalId} from "../../features/detail-slice";
import {useParams} from "react-router-dom";
import {ApexOptions} from "apexcharts";

const CHART_OPTIONS: ApexOptions = {
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
}


const useTickerDetail = () => {
    const dispatch = useDispatch()
    let {id: urlId = ''} = useParams()
    const header = !!urlId && urlId[0] == 't' ? `trade:1D:${urlId}/hist` : `trade:1D:${urlId}:p30/hist`
    const {data = [], isFetching = true} = useGetCandlesQuery({req: header}, {refetchOnMountOrArgChange: true})

    const [series, setSeries] = useState([])

    useEffect(() => {
        if (!!data && !isFetching) {
            let dataList = [];
            data?.map(item => {
                const newItem = {
                    x: new Date(item[0]),
                    y: [item[1], item[3], item[4], item[2]]
                }
                dataList.push(newItem)
            })
            setSeries([{data: dataList}])
        }

    }, [isFetching])
    const detailModalHandler = () => {
        dispatch(setModalId(urlId))
    }

    return {pageTitle: urlId, isFetching, detailModalHandler, series, options: CHART_OPTIONS}
}

export default useTickerDetail
