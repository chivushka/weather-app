import React, {useEffect} from 'react';
import './trip.scss';
import {useStore} from "../../context/storeContex";

const Trip = ({trip}) => {

    useEffect(() => {
        chooseTrip(true)

    }, []);
    const store = useStore()

    function chooseTrip(first) {
        let tripId
        if (first === true){
            tripId = "0"
        } else{
            store.setTripItem(trip)
            tripId = trip.id.toString()
        }
        highlightElement(tripId)

    }

    function highlightElement(id){
        const otherElements = document.getElementsByClassName("trip")
        for (const elem of otherElements) {
            const child = elem.querySelector(".bottom-section")
            if (elem.id === id) {
                child.style.borderColor = "#1890FF"

            } else child.style.borderColor = "#F2F4F8"
        }
    }

    function convertStringDateToText(date) {
        let arrDate = date.split("-")
        arrDate.reverse()
        return arrDate[0] + "." + arrDate[1] + "." + arrDate[2]
    }


    return (
        <div className={"trip"} id={trip.id} onClick={chooseTrip}>
            <div className="img-div">
                <img src={"/img/" + trip.city + ".jpeg"} alt=""/>
            </div>
            <div className="bottom-section">
                <span className="text">{trip.city}</span>
                <span className="date">{convertStringDateToText(trip.startDate)} - {convertStringDateToText(trip.endDate)}</span>
            </div>
        </div>
    );
};

export default Trip;