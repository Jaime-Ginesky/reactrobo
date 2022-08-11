import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchBox, searchChange}) => {
   return(
    <div className="search">
    <input 
    className="searchBox"
    type="search" 
    placeholder="search robots" 
    onChange={searchChange} />
   
    </div>
   )
}

export default SearchBox;