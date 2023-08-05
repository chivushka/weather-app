import React from 'react';
import "./dayWeather.scss";
import {useStore} from "../../context/storeContex";

const DayWeather = ({day}) => {

    const store = useStore()

    return (
        <div className="day-weather">
            <span className="name">{store.getWeekDay(day.datetime)}</span>
            <img src={'/img/weather/'+day.icon+'.svg'} alt=""/>
            <span className="temperature">{Math.round(day.tempmax)}&deg;/{Math.round(day.tempmin)}&deg;</span>
        </div>
    );
};

export default DayWeather;