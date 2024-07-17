import React from 'react';
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Halls from "../Halls/Halls.jsx";
import OurHalls from "../OurHalls/OurHalls.jsx";
import Packages from "../Packages/Packages.jsx";
import PhotoHall from "../PhotoHall/PhotoHall.jsx";
import Layer from "../Layer/Layer.jsx";
import HallPayment from "../HallPayment/HallPayment.jsx";

const MainPage = () => {
    return (
        <Layer>
            <Home/>
            <About/>
            <Halls/>
            <HallPayment/>
            <OurHalls/>
            <Packages/>
            <PhotoHall/>
        </Layer>
    );
};

export default MainPage;
