import React from 'react'
import burgericon from '../assets/icons/burger.png'
import pizza from '../assets/icons/pizza.png'
import sandwitch from '../assets/icons/sandwitch.png'
const ProductSlider = () => {
  return (
    <div className='product-container'>
      <div className='product-card active'><img src={burgericon} className="pro-image" alt="burger"/>Burger</div>
      <div className='product-card'><img src={pizza} alt="pizza" className="pro-image"/>Pizza</div>
      <div className='product-card'><img src={sandwitch} alt="sandwitch" className="pro-image"/>Sandwitch</div>
    </div>
  )
}

export default ProductSlider