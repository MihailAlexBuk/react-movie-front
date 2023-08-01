import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'

import 'swiper/css/bundle';
import "./carousel.css"

const Carousel = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{delay: 5000}}
      pagination={{ clickable: true }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.src}>
            <img src={item.src} alt={item.title}></img>
            <div className='carousel-text'>
              <h1><Link className='carousel-link' to="/signin">{item.title}</Link></h1>
              <h5>{item.genre}</h5>
              <h5>Rating:{item.rating}</h5>
            </div>
          
          
          
        </SwiperSlide>
      ))}
    </Swiper>
  );

}

export default Carousel;