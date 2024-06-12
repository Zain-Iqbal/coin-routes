import {useSelector} from "react-redux";
import {bidListStateSelector, bidTotalDataStateSelector} from "../../selectors/main-selector";
import CustomLinearProgress from "../liner-bar";
import {FULL_ORDER_BOOK_SIZE, HALF_ORDER_BOOK_SIZE, OrderBookView} from "../../utils/constants";

const BidList = (props) => {
    const {isGrid} = props
    const size = isGrid ? HALF_ORDER_BOOK_SIZE: FULL_ORDER_BOOK_SIZE
    const bidList = useSelector(bidListStateSelector)
    const bidTotal = useSelector(bidTotalDataStateSelector)

    return <div className={`bid-section ${isGrid && 'border'}`}>
        <div className={'bid-header'}>Bids</div>
        {Object.keys(bidList)
            .sort((a, b) => Number(b) - Number(a))
            .slice(0, size).map(item => <div
                key={`bid-${item}`}
                className={'row-container order-row'}>
                <div>{bidList[item].toFixed(8)}</div>
                <CustomLinearProgress className={'bar-order-book'}
                                      variant="determinate"
                                      value={Math.abs(Number(bidList[item]) / bidTotal * 100) % 100}/>
                <div>{item}</div>
            </div>)}
    </div>
}

export default BidList
