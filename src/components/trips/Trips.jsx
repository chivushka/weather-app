import React from 'react';
import './trips.scss';
import Trip from "../trip/Trip";

const Trips = () => {
    const trips = [
        {
            id: 1,
            city:'Berlin',
            startDate: new Date("2023-10-02"),
            endDate: new Date("2023-10-12")
        },
        {
            id: 2,
            city:'Milan',
            startDate: new Date("2023-09-13"),
            endDate: new Date("2023-09-20")
        },
        {
            id: 3,
            city:'Paris',
            startDate: new Date("2023-11-13"),
            endDate: new Date("2023-11-30")
        },
    ];

    return (
        <div className="trips">
            {trips.map((trip) =><Trip trip={trip} key={trip.id}></Trip>)}
            <div className="add-trip">
                <span className="plus">+</span>
                <span className="text">Add Trip</span>
            </div>
        </div>
    );
};

export default Trips;