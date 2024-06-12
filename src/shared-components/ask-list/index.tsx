import {useSelector} from "react-redux";
import {askListStateSelector, askTotalDataStateSelector} from "../../selectors/main-selector";
import CustomLinearProgress from "../liner-bar";
import {FULL_ORDER_BOOK_SIZE, HALF_ORDER_BOOK_SIZE} from "../../utils/constants";

const AskList = (props) => {
    const {isGrid} = props
    const size = isGrid ? HALF_ORDER_BOOK_SIZE : FULL_ORDER_BOOK_SIZE
    const askList = useSelector(askListStateSelector)
    const askTotal = useSelector(askTotalDataStateSelector)

    return <div className={`ask-section ${isGrid && 'border'}`}>
        <div className={'ask-header'}>
            Asks
        </div>
        {Object.keys(askList)
            .sort((a, b) => Number(a) - Number(b))
            .slice(0, size).map(item => <div key={`ask-${item}`}
                                             className={'row-container order-row'}>
                <div>{askList[item]
                    .toFixed(8)}
                </div>
                <CustomLinearProgress className={'bar-order-book'}
                                      colorMy={'#92D2CC'}
                                      variant="determinate"
                                      value={Math.abs(Number(askList[item]) / askTotal * 100) % 100}/>
                <div>{item}</div>
            </div>)}
    </div>
}

export default AskList
