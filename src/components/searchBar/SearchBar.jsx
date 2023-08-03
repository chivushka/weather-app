import React from 'react';
import './searchBar.scss';
import SearchIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
    return (
        <div className="container-search">
            <SearchIcon className="search-icon"/>
            <input type="text" placeholder="Search your trip"/>
        </div>
    );
};

export default SearchBar;