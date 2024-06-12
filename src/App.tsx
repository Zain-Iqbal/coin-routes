import React from 'react';
import {Routes, Route} from "react-router-dom";

import DefaultLayout from "./shared-components/default-layout";
import Home from "./screens/home";
import {ROUTES} from "./routes";

function App() {
    return (
        <DefaultLayout>
            <Routes>
                <Route path={ROUTES.default} element={<Home/>}/>
                <Route path={ROUTES.home} element={<Home/>}/>
            </Routes>
        </DefaultLayout>
    );
}

export default App;
