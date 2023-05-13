import React from 'react';
import hamicon from '../assets/icons/hamicon.png';
import location from '../assets/icons/location.png';
import profile from '../assets/icons/profile.png';
import search from '../assets/icons/search.png';
const Header = () => {
  return (
    <header >
        <nav>
           <ul className='list-items'>
                <li>
                    <img src={hamicon} alt="menu-icon"/>
                </li>
                <li>
                    <img src={location} alt="location"/>
                </li>
                <li>
                    <p className='location-text'>Freedom way, Lekki phase</p>
                </li>
                <li>
                <img src={profile} alt="profile"/>
                </li>
            </ul>
        </nav>
        <div className="searchBar">
            <input placeholder='Search' className='input-box'></input>
            <img src={search} className="search-icon" alt="search-icon"/>
        </div>
        
    </header>
  )
}

export default Header