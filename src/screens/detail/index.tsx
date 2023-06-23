import React from "react";
import Chart from "react-apexcharts";
import useTickerDetail from "./index.hook";

import './styles.scss'

const TickerDetail = () => {
    const { pageTitle, isFetching, detailModalHandler, series, options} = useTickerDetail()

    return <div className={'detail-container'}>
        <div className={'header'}>
            <div className={'title'}>{pageTitle}</div>
        </div>
        <button className={'btn margin-btm'} onClick={() => detailModalHandler()}>View Ticker</button>
        {!!series && !!series.length &&<Chart options={options} series={series} type="candlestick" height={350}/>}
    </div>
}

export default TickerDetail
