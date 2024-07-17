import {createBrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.jsx";
import HallPayment from "./components/HallPayment/HallPayment.jsx";
import React from 'react'


export const router = createBrowserRouter([
    {
        path: '/kinoroom',
        element: <MainPage/>,
        children: [
            {
                path: 'hall',
                element: <HallPayment/>
            }
        ]
    }
])