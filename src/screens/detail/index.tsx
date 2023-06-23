import React from "react";

import useHome from "./index.hook";

import './styles.scss'

const Home = () => {
    const {pageDescription, pageTitle, data, isFetching, detailModalHandler, id} = useHome()

    return <div className={'home-container'}>
        <div className={'header'}>
            <div className={'title'}>{pageTitle}</div>
            <div className={'description fade'}>{pageDescription}</div>
        </div>
        <div className={'ticker-container'}>
            {data.map(item => {
                return <div key={`${item[0]}`} className={`ticker-item ${id === item[0] ? 'selected' : ''}`}
                            onClick={() => detailModalHandler(item[0])}>
                    <div>{item[0]}</div>
                    <div className={'button-container'}>
                        <button className={'btn'}>View Ticker</button>
                        <button className={'btn'}>View Detail</button>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Home
