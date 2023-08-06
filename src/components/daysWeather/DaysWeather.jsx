import React, {useContext, useEffect, useState} from 'react';
import DayWeather from "../dayWeather/DayWeather";
import "./daysWeather.scss";
import {StoreContext, useStore} from "../../context/storeContex";
const DaysWeather = () => {

    const {tripItem} = useContext(StoreContext)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchWeatherDays()
    }, [tripItem]);

    const fetchWeatherDays = (() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelin\n" +
                    "e/"+tripItem.city+"/"+tripItem.startDate+"/"+ tripItem.endDate+"?unitGroup=metric&include=days&" +
                    "key=XMRQ93DTNCTQFAQK9KNMVGGEG&contentType=json"
                )
            ).json();

            setData(data)
        };

        dataFetch().then(promise => console.log(data));

    })

    return (
        <>{ data ?
            <div className="days-weather">
                <div className="title">Week</div>
                <div className="days">{data.days.map((day,id) =><DayWeather day={day} key={id++}></DayWeather>)}</div>
            </div>:
            <div></div>
        }
        </>

    );
};

export default DaysWeather;