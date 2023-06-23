import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


import useNavbar from "./index.hook";

import './styles.scss'

const Navbar = ({isDark = false, showIcons=true}) => {
    const {
    } = useNavbar()

    return (<AppBar position="static"
                    color={'transparent'}
                     elevation={0}
    >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                hello1
            </Toolbar></Container>
    </AppBar>)
}


export default Navbar;
