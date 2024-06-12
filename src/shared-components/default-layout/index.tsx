import React, {Suspense} from "react";
import Box from '@mui/material/Box';

import Navbar from "../nav";
import useTheme from "../../theme/useThemeContext.hook";

import './styles.scss'

const DefaultLayout = (props) => {
    const {isDark} = useTheme()

    return <Suspense fallback={<div>Loading</div>}><Box
        className={`${isDark ? 'is-dark' : 'is-light'}`} flex={1}>
        <Navbar/>
        <div className={'page-container'} style={{minHeight: '93.4vh'}}>
            {props.children}
        </div>
    </Box>
    </Suspense>

}
export default DefaultLayout
