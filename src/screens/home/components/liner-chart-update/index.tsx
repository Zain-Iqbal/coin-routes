import {memo} from "react";
import moment from "moment";
import {useSelector} from "react-redux";

import {tickerListStateSelector} from "../../../../selectors/main-selector";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Time : ${moment(label).format('DD-MM-YYYY hh:mm:ss a')}`}</p>
                <p className="label">{`Best Bid : ${payload[0].value}`}</p>
                <p className="label">{`Best Ask: ${payload[1].value}`}</p>
            </div>
        );
    }

    return null;
};

const LinerChartUpdate = () => {
    const tickerList = useSelector(tickerListStateSelector)
    const data: any = tickerList.filter(item => item.side === 'buy')


    return <LineChart
        width={410}
        height={480}
        data={data}
        margin={{
            right: 20,
            left: 2,
        }}
    >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time" tickFormatter={timeStr => moment(timeStr).format('HH:mm')}/>
        <YAxis/>
        <Tooltip content={CustomTooltip} />
        <Legend/>
        <Line type="monotone" label={'Best Bid Size'} dataKey="best_bid_size" stroke="#F23545" activeDot={{r: 8}}/>
        <Line type="monotone" label={'Best Ask Size'} dataKey="best_ask_size" stroke="#0A9981"/>
    </LineChart>
}

export default memo(LinerChartUpdate)
