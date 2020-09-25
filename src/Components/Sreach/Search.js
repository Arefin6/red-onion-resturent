import React from 'react';
import './Srarch.css';
const Search = () => {
    return (
        <div className="search-wrap">
             <div className="search-content">
               <h2>Best Food Waiting For You</h2> 
                <input type="text" placeholder="Search for food"/> 
                <button className="btn search-btn">Search</button>  
             </div>   

        </div>
    );
};

export default Search;