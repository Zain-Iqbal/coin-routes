import React, {Suspense} from "react";
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";

import {modalIdSelector} from "../../selectors/detail-selector";
import Navbar from "../nav";
import useTheme from "../../theme/useThemeContext.hook";

import './styles.scss'
import TickerDetailModal from "../ticker-detail-modal";

const DefaultLayout = (props) => {
    const {isDark} = useTheme()
    const id = useSelector(modalIdSelector)

    return <Suspense fallback={<div>Loading</div>}><Box
        className={`${isDark ? 'is-dark' : 'is-light'}`} flex={1}>
        <Navbar/>
        <div className={'page-container'} style={{minHeight: '92vh'}}>
            {props.children}
        </div>
        {!!id && <TickerDetailModal open={!!id}/>}
    </Box>
    </Suspense>

}
export default DefaultLayout
