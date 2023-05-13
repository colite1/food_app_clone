import React from 'react'

import BigProductCards from './BigProductCards'
import OfferStatic from './OfferStatic'
import ProductSlider from './ProductSlider'
import PropularProduct from './PropularProduct'

const HomeScreen = () => {
  return (
    <div className='main-container'>
      <OfferStatic/>
      <ProductSlider/>
      <BigProductCards/>
      <PropularProduct/>
    </div>
  )
}

export default HomeScreen