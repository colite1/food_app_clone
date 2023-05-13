import React from 'react'
import vector from '../assets/icons/Vector.png';
import photomenu from '../assets/icons/PhotoMenu.png'
const PropularProduct = () => {
  return (
    <div className='popular-item-container'>
        <div className='popular-menu'>
            <p>Popular Meal Menu</p>
            <p className='popular-item-text-light'>See All <img className='vector-icon' src={vector} alt="vectorimg"/></p>
        </div>
        <div className='popular-menu-content'>
            <img src={photomenu} alt='menu-photos'/>
            <p className='menu-content'>Peeper Pizza <br/><span>5kg box of Pizza</span></p>
            <span className='price'>$15</span>
        </div>

    </div>
  )
}

export default PropularProduct