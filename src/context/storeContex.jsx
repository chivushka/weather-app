import {createContext, useContext, useEffect, useState} from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {

    const [trips, setTrips] = useState(JSON.parse(sessionStorage.getItem("trips")) || [
        {
            id: 0,
            city: 'Berlin',
            startDate: "2023-08-10",
            endDate: "2023-08-12"
        }
    ]);

    useEffect(() => {
        sessionStorage.setItem("trips", JSON.stringify(trips));
    }, [trips]);

    let [tripItem, setTripItem] = useState(trips[0])

    const addNewTrip = (trip) => {
        const newTrip = {
            id: trips.length,
            city: trip.citySelected,
            startDate: trip.startDate,
            endDate: trip.endDate
        }
        const newTrips = [...trips]
        newTrips.push(newTrip)
        setTrips(newTrips)
        console.log(trips)
    }

    const getWeekDay = (date) => {

        const dayNumber = new Date(date).getDay()
        let dayName
        switch (dayNumber) {
            case 1:
                dayName = "Monday"
                break
            case 2:
                dayName = "Tuesday"
                break
            case 3:
                dayName = "Wednesday"
                break
            case 4:
                dayName = "Thursday"
                break
            case 5:
                dayName = "Friday"
                break
            case 6:
                dayName = "Saturday"
                break
            case 0:
                dayName = "Sunday"
                break
            default:
                dayName = "none"

        }
        return dayName
    }

    return (
        <StoreContext.Provider value={{trips, tripItem, setTripItem, getWeekDay, addNewTrip}}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);