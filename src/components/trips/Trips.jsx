import React, {useEffect, useState} from 'react';
import './trips.scss';
import Trip from "../trip/Trip";
import {useStore} from "../../context/storeContex";
import AddNewTrip from "../addNewTrip/AddNewTrip";

const Trips = ({searchString}) => {

    const [openAddNewTrip, setOpenAddNewTrip] = useState(false)
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


    const NewTrip = () => {
        setOpenAddNewTrip(true)
    }


    return (
        <>
            <div className="trips">
                {allTrips.map((trip) => <Trip trip={trip} key={trip.id}></Trip>)}
                <div className="add-trip-container">
                    <div className="add-trip" onClick={NewTrip}>
                        <span className="plus">+</span>
                        <span className="text">Add Trip</span>
                    </div>
                </div>
            </div>
            {openAddNewTrip && <AddNewTrip setOpenAddNewTrip = {setOpenAddNewTrip}/>}
        </>
    );
};

export default Trips;