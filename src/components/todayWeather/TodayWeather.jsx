import React from 'react';
import './todayWeather.scss';

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
            <div className="bottom-elem">
                <div className="element">
                    <div className="number">30</div>
                    <div className="text">DAYS</div>
                </div>
                <div className="element">
                    <div className="number">15</div>
                    <div className="text">HOURS</div>
                </div>
                <div className="element">
                    <div className="number">15</div>
                    <div className="text">MINUTES</div>
                </div>
                <div className="element">
                    <div className="number">30</div>
                    <div className="text">SECONDS</div>
                </div>
            </div>
        </div>
    );
};

export default TodayWeather;