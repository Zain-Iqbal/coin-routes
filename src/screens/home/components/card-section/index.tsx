import React from "react";
import {useSelector} from "react-redux";

import Card from "../card";
import {tickerStateSelector} from "../../../../selectors/main-selector";

const CardSection = (props) => {
    const {
        best_ask,
        best_bid,
        best_ask_size,
        best_bid_size,
        side
    } = useSelector(tickerStateSelector)

    return <div className={'best-wrapper'}>
            <Card title={'Best Bid'}
                  priceTitle={'Bid Price'}
                  price={best_bid}
                  sizeTitle={'Bid Quantity'}
                  size={best_bid_size}
                  color={'#F23645'}
                  type={side}
            />
            <Card title={'Best Ask'}
                  priceTitle={'Ask Price'}
                  price={best_ask}
                  sizeTitle={'Ask Quantity'}
                  size={best_ask_size}
                  color={'#2F9981'}
                  type={side}
            />
        </div>
}

export default CardSection




