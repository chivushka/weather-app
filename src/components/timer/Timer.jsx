import React, {useContext, useEffect, useState} from 'react';
import './timer.scss';
import {StoreContext, useStore} from "../../context/storeContex";

const Timer = (tripChange) => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const store = useStore()
    const {tripItem} = useContext(StoreContext)
    const [date, setDate] = useState(store.tripItem.startDate)

    const getTime = (lastDate) => {
        const time = new Date(lastDate) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        setDate(store.tripItem.startDate)
        const interval = setInterval(() => getTime(date), 1000);
        return () => clearInterval(interval);
    }, [tripChange]);

    return (
        <div className="timer" role="timer">
            <div className="element">
                <div className="number">{days < 10 ? "0" + days : days}</div>
                <div className="text">DAYS</div>
            </div>
            <div className="element">
                <div className="number">{hours < 10 ? "0" + hours : hours}</div>
                <div className="text">HOURS</div>
            </div>
            <div className="element">
                <div className="number">{minutes < 10 ? "0" + minutes : minutes}</div>
                <div className="text">MINUTES</div>
            </div>
            <div className="element">
                <div className="number">{seconds < 10 ? "0" + seconds : seconds}</div>
                <div className="text">SECONDS</div>
            </div>
        </div>
    );
};

export default Timer;