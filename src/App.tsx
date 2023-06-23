import React from 'react';
import {Routes, Route} from "react-router-dom";

import DefaultLayout from "./shared-components/default-layout";
import Home from "./screens/home";
import TickerDetail from "./screens/detail";
import {ROUTES} from "./routes";


function App() {
    return (
        <DefaultLayout>
            <Routes>
                <Route path={ROUTES.default} element={<Home/>}/>
                <Route path={`${ROUTES.detail}/:id`} element={<TickerDetail/>}/>
            </Routes>
        </DefaultLayout>
    );
}

export default App;
