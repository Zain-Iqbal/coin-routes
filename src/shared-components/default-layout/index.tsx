import React, {Suspense} from "react";
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';

import Navbar from "../nav";
import useTheme from "../../theme/useThemeContext.hook";
import {ROUTES} from "../../routes";

import './styles.scss'

const DefaultLayout = (props) => {
    const {isDark} = useTheme()
    const location = useLocation();
    const pathName = location.pathname
    const showIcons = ROUTES.default === pathName

    return <Suspense fallback={<div>Loading</div>}><Box
        className={`${isDark ? 'is-dark' : 'is-light'}`} flex={1}>
        <Navbar isDark={isDark} showIcons={showIcons}/>
        <div className={'page-container-relative'} style={{minHeight: '92vh'}}>
            {props.children}
        </div>
    </Box>
    </Suspense>

}
export default DefaultLayout
