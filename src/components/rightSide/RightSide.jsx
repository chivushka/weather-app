import React from 'react';
import './rightSide.scss';
import TodayWeather from "../todayWeather/TodayWeather";

const RightSide = () => {
    return (
        <div className="container-right">
            <TodayWeather></TodayWeather>
        </div>
    );
};

export default RightSide;