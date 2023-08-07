import React, {useEffect, useState} from 'react';
import './leftSide.scss';
import Trips from "../trips/Trips";
import DaysWeather from "../daysWeather/DaysWeather";
import SearchIcon from "@mui/icons-material/SearchOutlined";

const LeftSide = () => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")

    useEffect(() => {
        if(search===""){
            document.getElementsByName("search-by")[0].value=""
        }
    }, [search]);

    useEffect(() => {
        if(sort===""){
            document.getElementsByName("sort-by")[0].value=""
        }
    }, [sort]);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleChange = (e) =>{
        setSort(e.target.value)
    }

    return (
        <div className="container-left">
            <span className="app-name">Weather <b>Forecast</b></span>
            <div className="upper-container">
                <div className="container-search">
                    <SearchIcon className="search-icon"/>
                    <input name="search-by" type="text" placeholder="Search your trip" onChange={handleSearch}/>
                </div>
                <div className="container-sort">
                    <select name="sort-by" onChange={handleChange}>
                        <option value="">Sort by</option>
                        <option value="startDate">Start date</option>
                    </select>
                </div>
            </div>
            <Trips searchString={search} sortType={sort} setSearch={setSearch} setSort={setSort}/>
            <DaysWeather/>
        </div>
    );
};

export default LeftSide;