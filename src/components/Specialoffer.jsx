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
                        <h3 className={"text-[39px] font-bold text-primary mb-12"}>Special Offers</h3>
                    </div>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart id="so-1" productimg={cap} badgename={"HOT"} productname={"Casual Cap"} productprice={"$20.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart id="so-2" productimg={table} badgename={"HOT"} productname={"Study Table"} productprice={"$120.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart id="so-3" productimg={sunglass} badgename={"HOT"} productname={"Sun Glasses"} productprice={"$45.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart id="so-4" productimg={headphone} badgename={"HOT"} productname={"Wireless Headphones"} productprice={"$75.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"}>
                                <Productcart id="so-5" productimg={table} badgename={"HOT"} productname={"Wooden Table"} productprice={"$130.00"} />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>
        </>
    )
}

export default Specialoffer
