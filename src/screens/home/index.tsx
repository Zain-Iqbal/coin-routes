import React, {useState} from "react";

import OrderBook from "./components/order-book";
import {Currencies} from "../../utils/constants";
import TradingViewChart from "./components/trading-view-chart";
import CardSection from "./components/card-section";
import LinerChartUpdate from "./components/liner-chart-update";

import './styles.scss'
import CurrencyOptions from "./components/currency-options";


const Home = () => {
    const [currency, setCurrency] = useState(Currencies[0])
    const [prevCurrency, setPrevCurrency] = useState('')

    return <div className={'home-container'}>
        <div className={'left-section'}>
            <div className={'left-top-section'}>
            <CardSection />
            <div className={'drop-down-container'}>
                <CurrencyOptions currency={currency} setCurrency={setCurrency} setPrevCurrency={setPrevCurrency}/>
            </div>
            </div>
            <div className={'chart-section'}>
                <TradingViewChart type={currency}/>
                <LinerChartUpdate/>
            </div>
        </div>
        <OrderBook type={currency} prevType={prevCurrency}/>
    </div>
}

export default Home


