import React, {useEffect, useState} from 'react';
import './trips.scss';
import Trip from "../trip/Trip";
import {useStore} from "../../context/storeContex";
import AddNewTrip from "../addNewTrip/AddNewTrip";
import ArrowBack from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';

const Trips = ({searchString, sortType, setSearch, setSort}) => {

    const [openAddNewTrip, setOpenAddNewTrip] = useState(false)
    const [allTrips, setAllTrips] = useState([])
    const store = useStore()

    const getSearchArr = () => {
        let tripsSearch = []
        for (let trip of store.trips) {
            if (trip.city.toLowerCase().includes(searchString.toLowerCase())) {
                tripsSearch.push(trip)
            }
        }
        return tripsSearch
    }

    const getSortedArr = (arr) => {
        let tripsSorted = []
        let trips = []

        if (arr) {
            trips = [...arr]
        } else {
            trips = [...store.trips]
        }

        if (sortType === "startDate") {
            tripsSorted = trips.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        }

        return tripsSorted
    }

    useEffect(() => {
        let tripsCurrent = []
        if (searchString !== "") {
            if (sortType !== "") {
                tripsCurrent = getSearchArr()
                tripsCurrent = getSortedArr(tripsCurrent)
            } else {
                tripsCurrent = getSearchArr()
            }
            setAllTrips(tripsCurrent)
        } else if (sortType !== "") {
            if (searchString !== "") {
                tripsCurrent = getSearchArr()
                tripsCurrent = getSortedArr(tripsCurrent)
            } else {
                tripsCurrent = getSortedArr()
            }
            setAllTrips(tripsCurrent)
        } else {
            setAllTrips(store.trips)

        }
    }, [searchString, sortType]);

    useEffect(() => {
        setAllTrips(store.trips)
    }, [store.trips]);


    const NewTrip = () => {
        setSearch("")
        setSort("")
        setOpenAddNewTrip(true)
    }

    const scrollLeft = () =>{
        document.getElementsByClassName("trips")[0].scrollLeft -= 200;
    }

    const scrollRight = () =>{
        document.getElementsByClassName("trips")[0].scrollLeft += 200;
    }


    return (
        <>
            <div className="cover-trips">
                <div className="trips">
                    {allTrips.map((trip) => <Trip trip={trip} key={trip.id}></Trip>)}
                    <div className="add-trip-container">
                        <div className="add-trip" onClick={NewTrip}>
                            <span className="plus">+</span>
                            <span className="text">Add Trip</span>
                        </div>
                    </div>
                </div>
                <div className="scroll-buttons"><button onClick={scrollLeft}><ArrowBack/></button>
                    <button onClick={scrollRight}><ArrowForward/></button>
                </div>
            </div>
            {openAddNewTrip && <AddNewTrip setOpenAddNewTrip={setOpenAddNewTrip}/>}
        </>

    );
};

export default Trips;