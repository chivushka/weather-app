import React, {useEffect} from 'react';
import './trip.scss';

const Trip = ({trip}) => {

    useEffect(() => {
        chooseTrip(1);
    }, []);

    function chooseTrip(id) {

        const otherElements = document.getElementsByClassName("trip")
        let tripId
        if(id === 1){
            tripId = id.toString()
        }
        else{
            tripId = trip.id.toString()
        }

        for (const elem of otherElements) {
            const child = elem.querySelector(".bottom-section")
            if (elem.id === tripId) {
                child.style.borderColor = "#1890FF"

            } else child.style.borderColor = "#F2F4F8"

        }

    }

    function convertDateToText(date) {
        const day = date.getDay().valueOf() < 10 ? "0" + date.getDay().toString() : date.getDay().toString()
        const month = date.getMonth().valueOf() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()
        return day + '.' + month + '.' + date.getFullYear().toString()
    }

    return (
        <div className={"trip"} id={trip.id} onClick={chooseTrip}>
            <div className="img-div">
                <img src={"/img/" + trip.city + ".jpeg"} alt=""/>
            </div>
            <div className="bottom-section">
                <span className="text">{trip.city}</span>
                <span className="date">{convertDateToText(trip.startDate)} - {convertDateToText(trip.endDate)}</span>
            </div>
        </div>
    );
};

export default Trip;