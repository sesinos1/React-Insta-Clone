import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className = 'top-bar'>
                <div><i class="fab fa-instagram"></i></div>

                <div className = "Instagram"><h1>Instagram</h1></div>

                <div classname = "SearchBar"><input type = "text" placeholder = "search"></input></div>
                
                <div className = 'icons'>
                <i class="far fa-compass"></i>
                <i class="far fa-user"></i>
                <i class="far fa-heart"></i>
                </div>
        </div>
    )
}

export default SearchBar;