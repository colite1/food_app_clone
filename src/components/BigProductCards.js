import React from 'react'
import star from '../assets/icons/Star.png'
import burger1 from '../assets/icons/burger1.png'
import burger2 from '../assets/icons/burger2.png'
const BigProductCards = () => {
  return (
    <div className='big-product-cards'>
        <div className='big-product-card'>
            <div className='rating'>
                <img src={star} alt="rating"/>
                <span>3.8</span>
            </div>
            <div className='big-pro-card-content'>
                <div className='big-pro-card-img'>
                    <img src={burger1} alt="burger"/>
                </div>
                <div className='big-pro-card-content-p'>
                    <p className='content-bold-text'>Chicken burger</p>
                    <p className='content-light-text'>100gr chicken + tomato + cheese Lettuce</p>
                    <div className='pro-card-price'>
                        <span>$20.<span className='pro-card-price-span'>00</span></span>
                        <button className='pro-card-price-btn'>+</button>
                    </div>
                </div>

                
            </div>
        </div>

        <div className='big-product-card'>
            <div className='rating' >
                <img src={star} alt="rating" />
                <span>4.5</span>
            </div>
            <div className='big-pro-card-content'>
                <div className='big-pro-card-img2'>
                    <img src={burger2} alt="burger"/>
                </div>
                <div className='big-pro-card-content-p'>
                    <p className='content-bold-text'>Chese burger</p>
                    <p className='content-light-text'>100gr meat + onion + tomato + Lettuce cheese</p>
                    <div className='pro-card-price'>
                        <span>$15.<span className='pro-card-price-span'>00</span></span>
                        <button className='pro-card-price-btn'>+</button>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default BigProductCards