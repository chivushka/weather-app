import {createContext, useContext, useState} from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {

    const [trips, setTrips] = useState([
        {
            id: 0,
            city: 'Berlin',
            startDate: "2023-08-10",
            endDate: "2023-08-12"
        },
        {
            id: 1,
            city: 'Milan',
            startDate: "2023-08-07",
            endDate: "2023-08-09"
        },
    ]);

    let [tripItem, setTripItem] = useState(trips[0])

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

    const addNewTrip = (newTrip) =>{
        const newTrips = [...trips]
        newTrips.push(newTrip)
        setTrips(newTrips)
    }

    return (
        <StoreContext.Provider value={{trips, tripItem, setTripItem, getWeekDay, addNewTrip}}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);