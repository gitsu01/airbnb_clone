import React from 'react'
import HouseImage from '../../public/assets/images/h3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HouseCard.css';

// import required modules
import { Pagination } from 'swiper/modules';

function HouseCard() {
  return (
    <>
      <div className="house_card w-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          style={{
            '--swiper-pagination-color': '#fff',
          }}
          lazy={true}
          loop={true}
          modules={[Pagination]}
          className="mySwiper rounded-2xl"
        >
          <SwiperSlide><img src={HouseImage} alt="HouseImage" className='aspect-square object-cover' /></SwiperSlide>
          <SwiperSlide><img src={HouseImage} alt="HouseImage" className='aspect-square object-cover' /></SwiperSlide>
          <SwiperSlide><img src={HouseImage} alt="HouseImage" className='aspect-square object-cover' /></SwiperSlide>
          <SwiperSlide><img src={HouseImage} alt="HouseImage" className='aspect-square object-cover' /></SwiperSlide>
          <SwiperSlide><img src={HouseImage} alt="HouseImage" className='aspect-square object-cover' /></SwiperSlide>
          
        </Swiper>
        
        <div className="house_info py-4 text-lg">
          <div>
            <p className='font-bold'>Schloss Wimsbach, Austria – South Suite</p>
            <p className='font-extralight'>Built in 1990</p>
            <p>4-9 Apr</p>
          </div>
          <p className="price"><span className='font-bold'>₹12,645</span> night</p>
        </div>
      </div>

    </>
  )
}

export default HouseCard
