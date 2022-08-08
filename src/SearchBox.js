import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
   return(
    <div className="search">
    <input 
    className="searchBox"
    type="search" 
    placeholder="search robots" />
    </div>
   )
}

export default SearchBox;