import React, {useEffect, useState} from 'react';
import './trips.scss';
import Trip from "../trip/Trip";
import {useStore} from "../../context/storeContex";

const Trips = ({searchString}) => {

    const [allTrips, setAllTrips] = useState([])
    const store = useStore()

    useEffect(() => {
        const tripsSearch = []
        if (searchString !== '') {
            for (let trip of store.trips) {
                if (trip.city.toLowerCase().includes(searchString)) {
                    tripsSearch.push(trip)
                }
            }
            setAllTrips(tripsSearch)
            document.getElementsByClassName('add-trip')[0].style.display = "none"
        } else {
            setAllTrips(store.trips)
            document.getElementsByClassName('add-trip')[0].style.display = "flex"
        }
    }, [searchString]);

    useEffect(() => {
        setAllTrips(store.trips)
    }, [store.trips]);


    const AddTrip = () => {
        store.addNewTrip({
            id: 3,
            city: 'Berlin',
            startDate: "2023-08-10",
            endDate: "2023-08-12"
        })
    }


    return (
        <div className="trips scroll-div">
            {allTrips.map((trip) => <Trip trip={trip} key={trip.id}></Trip>)}
            <div className="add-trip-container">
                <div className="add-trip" onClick={AddTrip}>
                    <span className="plus">+</span>
                    <span className="text">Add Trip</span>
                </div>
            </div>
        </div>

    );
};

export default Trips;