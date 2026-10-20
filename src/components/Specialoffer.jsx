import React from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import Productcart from './Productcart';
import cap from '../assets/cap.png'
import table from '../assets/tabble.png'
import sunglass from '../assets/sunglass.png'
import headphone from '../assets/headphone.png'

const Specialoffer = () => {
    return (
        <>

            <div className="mt-29.5 mb-35">
                <Container>
                    <div className="">
                        <h3 className={"text-[39px] font-bold text-primary  mb-12"}>Our Bestsellers</h3>
                    </div>


                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart productimg={cap} badgename={"HOT"} productname={"New Juri"} productprice={"$25.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart productimg={table} badgename={"HOT"} productname={"New Juri"} productprice={"$25.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart productimg={sunglass} badgename={"HOT"} productname={"New Juri"} productprice={"$25.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart productimg={headphone} badgename={"HOT"} productname={"New Juri"} productprice={"$25.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart productimg={table} badgename={"HOT"} productname={"New Juri"} productprice={"$25.00"} />
                            </Link>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </Container>
            </div>
        </>
    )
}

export default Specialoffer