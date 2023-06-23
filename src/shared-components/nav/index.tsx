import React from 'react';
import {Link} from 'react-router-dom'
import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import useNavbar from "./index.hook";
import ThemeSwitch from "../theme-switch";
import {NAV_ROUTES, ROUTES} from "../../routes";

import './styles.scss'

const Navbar = () => {
    const {pathName, toggleTheme} = useNavbar()

    return (<AppBar position="static"
                    color={'transparent'}
                    elevation={0}>
        <Container maxWidth="xl" className={'nav-class'}>
            <Toolbar disableGutters className={'nav-container'}>
                <NavLeft pathName={pathName}/>
                <NavRight toggleTheme={toggleTheme}/>
            </Toolbar>
        </Container>
    </AppBar>)
}


export default Navbar;

const NavLeft = ({pathName = ''}: { pathName: string }) => {
    return <div className={'nav-left-container'}>{NAV_ROUTES.map(item => {
        const {route = '/', label = ''} = item
        const active = (route === ROUTES.default && pathName === ROUTES.default) ||
        (route !== ROUTES.default && pathName.includes(route)) ? 'active' : ''

        return <Link key={`nav-button-${route}`}
                     className={`nav-btn ${active}`} to={route}>{label}</Link>
    })}</div>
}

const NavRight = ({toggleTheme}) => {
    return <ThemeSwitch sx={{m: 1}} defaultChecked onChange={toggleTheme}/>
}
