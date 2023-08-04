import React from 'react';
import './todayWeather.scss';
import Timer from "../timer/Timer";

const TodayWeather = () => {
    return (
        <div className="container-today">
            <div className="center-elem">
                <div className="day">Sunday</div>
                <div className="elem-degrees">
                    <img className="weather-icon" src="/img/cloud-icon.png" alt=""/>
                    <div className="degrees">24</div>
                    <div className="celcium">&deg;C</div>
                </div>
                <div className="city">Berlin</div>
            </div>
            <Timer></Timer>
        </div>
    );
};

export default TodayWeather;