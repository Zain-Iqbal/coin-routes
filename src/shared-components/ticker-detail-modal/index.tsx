import * as React from 'react';
import Modal from '@mui/material/Modal';

import useTickerDetailModal from "./index.hook";

import './styles.scss'

const TickerDetailModal = (props) => {
    const {open} = props
    const {id, isDark, data, isFetching, header, closeModal} = useTickerDetailModal()

    return (
        <Modal
            open={open}
            onClose={closeModal}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={`ticker-detail-container ${isDark ? 'dark' : ''}`}>
                <div className={'title'}>{id}{isFetching && <i className="fa fa-spinner fa-spin"></i>}</div>
                {!!header.length && !!data.length && <RenderDetail data={data} header={header}/>}
                <div className={'modal-footer'}>
                    <button className={'btn'} onClick={closeModal}>Close</button>
                </div>
            </div>
        </Modal>)
}


export default TickerDetailModal


const RenderDetail = ({data, header}) => {
    return <div className={'detail-list-container'}>{data.map((item, index) => !!header[index] ?
        <div key={`detail-ticker${index}`}>
            <div>{header[index]}</div>
            <div className={'fade'}>{item}</div>
        </div> : null)}
    </div>
}
