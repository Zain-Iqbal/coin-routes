import React, {useState} from "react";

import OrderBook from "./components/order-book";
import {Currencies} from "../../utils/constants";
import TradingViewChart from "./components/trading-view-chart";
import CardSection from "./components/card-section";
import LinerChartUpdate from "./components/liner-chart-update";

import './styles.scss'


const Home = () => {
    const [currency, setCurrency] = useState(Currencies[0])

    return <div className={'home-container'}>
        <div className={'left-section'}>
            <CardSection currency={currency} setCurrency={setCurrency}/>
            <div className={'chart-section'}>
                <TradingViewChart type={currency}/>
                <LinerChartUpdate/>
            </div>
        </div>
        <OrderBook type={currency}/>
    </div>
}

export default Home


