import { Link } from 'react-router-dom'
import srcimg from '../assets/banner.png'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banners = () => {
    return (
        <>



            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to={"/shop"}> <img src={srcimg} alt='imgalt' /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/shop"}> <img src={srcimg} alt='imgalt' /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/shop"}> <img src={srcimg} alt='imgalt' /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/shop"}> <img src={srcimg} alt='imgalt' /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={"/shop"}> <img src={srcimg} alt='imgalt' /></Link>
                </SwiperSlide>


            </Swiper>
        </>


    )
}


export default Banners