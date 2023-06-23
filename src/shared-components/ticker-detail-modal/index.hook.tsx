import * as React from 'react';
import Modal from '@mui/material/Modal';
import {setModalId} from "../../features/detail-slice";
import {useDispatch, useSelector} from "react-redux";

import useTheme from "../../theme/useThemeContext.hook";
import {modalIdSelector} from "../../selectors/detail-selector";
import {useGetTickerQuery} from "../../features/api/inject-endpoint-api";
import {FUNDING_DETAIL_LABELS, TRADING_DETAIL_LABELS} from "./constants";

import './styles.scss'

const TickerDetailModal = (props) => {
    const {open} = props
    const id = useSelector(modalIdSelector)
    const {isDark} = useTheme()
    const dispatch = useDispatch()
    const {data = [], isFetching = true} = useGetTickerQuery({symbols: id}, {refetchOnMountOrArgChange: true})
    const header = !!id && id[0] == 't' ? TRADING_DETAIL_LABELS : FUNDING_DETAIL_LABELS

    const closeModal = () => {
        const data = window.location
        const {origin = '', pathname = ''} = data
        const newPath = `${origin}${pathname}`
        window.history.replaceState(null, '', newPath)
        dispatch(setModalId(null))
    }

    return (
        <Modal
            open={open}
            onClose={closeModal}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={`ticker-detail-container ${isDark ? 'dark' : ''}`}>
                <div className={'title'}>{id}{isFetching && <i className="fa fa-spinner fa-spin"></i>}</div>
                {!!header.length && !!data.length && <RenderDetail data={data} header={header}/>}
                <div className={'modal-footer'}>
                    <button className={'btn'} onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>

        </Modal>)
}


export default TickerDetailModal


const RenderDetail = ({data, header}) => {
    return <div className={'detail-list-container'}>{data.map((item, index) => !!header[index] ? <div>
        <div>
            {header[index]}
        </div>
        <div className={'fade'}>
            {item}
        </div>
    </div> : null)}</div>
}
