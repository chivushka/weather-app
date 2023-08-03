import React from 'react';
import "./dayWeather.scss";

const DayWeather = ({day}) => {

    function getWeekDay(date){
        const dayNumber = date.getDay()
        let dayName
        switch (dayNumber){
            case 1:
                dayName="Monday"
                break
            case 2:
                dayName="Tuesday"
                break
            case 3:
                dayName="Wednesday"
                break
            case 4:
                dayName="Thursday"
                break
            case 5:
                dayName="Friday"
                break
            case 6:
                dayName="Saturday"
                break
            case 0:
                dayName="Sunday"
                break
            default:
                dayName="none"
        }

        return dayName
    }

    return (
        <div className="day-weather">
            <span className="name">{getWeekDay(day.date)}</span>
            <img src="/img/cloud-icon.png" alt=""/>
            <span className="temperature">{day.tempmax}&deg;/{day.tempmin}&deg;</span>
        </div>
    );
};

export default DayWeather;