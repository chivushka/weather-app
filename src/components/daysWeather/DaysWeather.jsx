import React from 'react';
import DayWeather from "../dayWeather/DayWeather";
import "./daysWeather.scss";

const DaysWeather = () => {

    const days = [
        {
            id: 1,
            tempmin: "10",
            tempmax: "21",
            icon: "cloudy-day",
            date: new Date("2023-08-02")
        },
        {
            id: 2,
            tempmin: "13",
            tempmax: "25",
            icon: "cloudy-day",
            date: new Date("2023-08-03")
        },
        {
            id: 3,
            tempmin: "19",
            tempmax: "27",
            icon: "cloudy-day",
            date: new Date("2023-08-04")
        },
    ]
    return (
        <div className="days-weather">
            <div className="title">Week</div>
            <div className="days">{days.map((day) =><DayWeather day={day} key={day.id}></DayWeather>)}</div>
        </div>
    );
};

export default DaysWeather;