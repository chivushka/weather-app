import React from 'react';
import './timer.scss';

const Timer = () => {
        const [days, setDays] = React.useState(0);
        const [hours, setHours] = React.useState(0);
        const [minutes, setMinutes] = React.useState(0);
        const [seconds, setSeconds] = React.useState(0);

        const deadline = "August, 5, 2023";

        const getTime = () => {
            const time = Date.parse(deadline) - Date.now();

            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        };

        React.useEffect(() => {
            const interval = setInterval(() => getTime(deadline), 1000);

            return () => clearInterval(interval);
        }, []);

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