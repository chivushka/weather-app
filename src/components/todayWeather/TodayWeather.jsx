import React, {useContext, useEffect, useState} from 'react';
import './todayWeather.scss';
import Timer from "../timer/Timer";
import {StoreContext, useStore} from "../../context/storeContex";

const TodayWeather = () => {
    const {tripItem} = useContext(StoreContext)
    const store = useStore()

    const [trip, setTrip] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchWeatherToday()
    }, [tripItem]);

    const fetchWeatherToday = (() => {
        setTrip(tripItem)
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelin\n" +
                    "e/" + tripItem.city.toString() + "/today?unitGroup=metric&include=days&key=XMRQ93DTNCTQFAQK9KNMVGGEG&contentType=\n" +
                    "json"
                )
            ).json();

            setData(data)
        };

        dataFetch().then(console.log(data));

    })

    return (

        <div className="container-today">
            {trip !== null && data != null ?
                <>
                    <div className="center-elem">
                        <div className="day">{store.getWeekDay(new Date())}</div>
                        <div className="elem-degrees">
                            <img className="weather-icon" src={'/img/weather/'+data.days[0].icon+'.svg'} alt=""/>
                            <div className="degrees">{Math.round(data.days[0].feelslike)}</div>
                            <div className="celcium">&deg;C</div>
                        </div>
                        <div className="city">{tripItem.city}</div>
                    </div>
                    <Timer item = {tripItem}></Timer>
                </> :
                <div></div>}
        </div>
    );
};

export default TodayWeather;