import React from 'react';
import './leftSide.scss';
import Trips from "../trips/Trips";
import SearchBar from "../searchBar/SearchBar";
import DaysWeather from "../daysWeather/DaysWeather";

const LeftSide = () => {
    return (
        <div className="container-left">
            <span className="app-name">Weather <b>Forecast</b></span>
            <SearchBar/>
            <Trips/>
            <DaysWeather/>
        </div>
    );
};

export default LeftSide;