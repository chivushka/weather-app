import React, {useState} from 'react';
import './leftSide.scss';
import Trips from "../trips/Trips";
import DaysWeather from "../daysWeather/DaysWeather";
import SearchIcon from "@mui/icons-material/SearchOutlined";

const LeftSide = () => {
    const [search, setSearch] = useState("nothing")

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="container-left">
            <span className="app-name">Weather <b>Forecast</b></span>
            <div className="container-search">
                <SearchIcon className="search-icon"/>
                <input type="text" placeholder="Search your trip" onChange={handleSearch}/>
            </div>
            <Trips searchString={search}/>
            <DaysWeather/>
        </div>
    );
};

export default LeftSide;