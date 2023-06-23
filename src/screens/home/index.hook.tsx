import React from "react";
import {useGetTickerQuery} from "../../features/api/inject-endpoint-api";

import './styles.scss'

const Home = () => {
    const {data = [], isFetching} = useGetTickerQuery({symbols: 'ALL'}, {refetchOnMountOrArgChange: true})
    console.log({data})

    return <div className={'home-container'}>
        <div className={'header'}>
            <div className={'title'}>Tickers</div>
            <div className={'description fade'}>The tickers endpoint provides a high level overview of the state of the
                market. It shows the current best bid and ask, the last traded price, as well as information on the
                daily volume and price movement over the last day. The endpoint can retrieve multiple tickers with a
                single query.
            </div>
        </div>
        <div className={'ticker-container'}>
            {data.map(item => {
                return <div>{item[0]}</div>
            })}
        </div>
    </div>
}

export default Home
