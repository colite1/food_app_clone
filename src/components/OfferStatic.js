import React from 'react'
import poster from '../assets/images/poster.png';
const OfferStatic = () => {
  return (
    <div className='offer-container-main'>
        <img src={poster} className="offer-container" alt = "offer-poster"></img>
        <p className='paginationDot'><span className='pagination-dot-red'>●</span> ● ●</p>
    </div>
  )
}

export default OfferStatic