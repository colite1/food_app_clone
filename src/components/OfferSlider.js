import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css';
//import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css';
import poster from '../assets/images/poster.png'
const OfferSlider = () => {
    
  return (
    <div className='offerSlider'>
        <Swiper
        freeMode = {true}
        grabCorsor={true}
        modules={[FreeMode]}
        className="mySwiper"
        sliderPerView={3}
        spaceBetween={10}
        >
        <SwiperSlide><img src={poster} alt="offer1"></img></SwiperSlide>
        <SwiperSlide><img src={poster} alt="offer2"></img></SwiperSlide>
        <SwiperSlide><img src={poster} alt="offer3"></img></SwiperSlide>
        </Swiper>
        
    </div>

  )
}

export default OfferSlider