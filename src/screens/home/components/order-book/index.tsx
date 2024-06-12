import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BidList from "../../../../shared-components/bid-list";
import AskList from "../../../../shared-components/ask-list";
import BorderLinearProgress from "../../../../shared-components/border-liner-bar";
import {AGGR_LIST, IconsData,} from "../../../../utils/constants";
import OrderBookLoading from "../../../../shared-components/order-book-loading";
import useOrderBook from "./index.hook";

import './styles.scss'

const OrderBook = (props) => {
    const {
        listType,
        setListType,
        aggrValue,
        setAggrValue,
        ShowBid,
        ShowAsk,
        isGrid,
        ShowOrderFooter,
        value,
        isFetching
    } = useOrderBook(props)


    return <div className={'order-book'}>
        <StaticView>
            <div className={'order-book-top-section'}>
                <IconsList listType={listType} setListType={setListType}/>
                <AggOptions aggrValue={aggrValue} setAggrValue={setAggrValue}/>
            </div>
        </StaticView>
        {ShowBid && <BidList isGrid={isGrid}/>}
        {ShowAsk && <AskList isGrid={isGrid}/>}
        {ShowOrderFooter && <BorderLinearProgress variant="determinate" value={value}/>}
        {isFetching && <OrderBookLoading/>}
    </div>
}

export default OrderBook


const StaticView = (props) => <>
    <div className={'row-container header'}>
        <h4>Order Book</h4>
    </div>
    {props.children}
    <div className={'row-container'}>
        <h5>Market Size</h5>
        <div className={'bar-order-book'}/>
        <h5>Price (USD)</h5>
    </div>
</>


const IconsList = (props) => {
    const {listType, setListType} = props
    return <div className={'icon-container'}>
        {IconsData.map((item, index) => <div
            key={`icon-list${index}`}
            onClick={() => setListType(item.type)}
            className={`order-icon ${listType === item.type ? 'selected-icon' : ''}`}
        >
            {item.icon}
        </div>)}
    </div>
}


const AggOptions = (props) => {
    const {aggrValue, setAggrValue} = props
    return <FormControl className={'dropdown'}>
        <InputLabel id="demo-simple-select-label">Agg</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Agg"
            value={aggrValue}
            onChange={(e) => setAggrValue(e.target.value)}
        >
            {AGGR_LIST.map(item => <MenuItem key={`aggr-${item}`} value={item}>{item}</MenuItem>)}
        </Select>
    </FormControl>
}
