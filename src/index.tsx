import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';

import App from './App';
import ThemeProvider from "./theme/theme-provider";
import {store} from "./app/store";

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createHashRouter([
    {
        path: "/*",
        element: <App />,
    }
]);

root.render(
        <ThemeProvider>
            <BrowserRouter>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
);
