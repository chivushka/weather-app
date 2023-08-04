import React, {useEffect, useState} from 'react';
import './trips.scss';
import Trip from "../trip/Trip";

const Trips = ({searchString}) => {

    const trips = [
        {
            id: 1,
            city: 'Berlin',
            startDate: new Date("2023-10-02"),
            endDate: new Date("2023-10-12")
        },
        {
            id: 2,
            city: 'Milan',
            startDate: new Date("2023-09-13"),
            endDate: new Date("2023-09-20")
        },
        {
            id: 3,
            city: 'Paris',
            startDate: new Date("2023-11-13"),
            endDate: new Date("2023-11-30")
        },
        {
            id: 4,
            city: 'Berlin',
            startDate: new Date("2023-10-02"),
            endDate: new Date("2023-10-12")
        },
        {
            id: 5,
            city: 'Milan',
            startDate: new Date("2023-09-13"),
            endDate: new Date("2023-09-20")
        },
        {
            id: 6,
            city: 'Paris',
            startDate: new Date("2023-11-13"),
            endDate: new Date("2023-11-30")
        }
    ];

    const [allTrips, setAllTrips] = useState([])

    useEffect(() => {
        const tripsNow = []
        if (searchString !== 'nothing') {
            for (let trip of trips) {
                if (trip.city.toLowerCase().includes(searchString)) {
                    tripsNow.push(trip)
                }
            }
            setAllTrips(tripsNow)
        } else {
            setAllTrips(trips)
        }
    }, [searchString]);


    return (
            <div className="trips scroll-div">
                {allTrips.map((trip) => <Trip trip={trip} key={trip.id}></Trip>)}
                <div className="add-trip-container">
                    <div className="add-trip">
                        <span className="plus">+</span>
                        <span className="text">Add Trip</span>
                    </div>
                </div>
            </div>

    );
};

export default Trips;