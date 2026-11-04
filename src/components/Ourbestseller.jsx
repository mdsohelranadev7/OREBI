import React from 'react'
import Productcart from './Productcart'
import Container from './Container'
import juri from '../assets/juri.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import graybag from '../assets/grey bag.png'
import cup from '../assets/cup.png'
import blackbag from '../assets/balck bag.png'

const Ourbestseller = () => {
    return (
        <>
            <div className="mt-29.5 mb-32.5">
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
                            <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Productcart id="obs-1" productimg={juri} badgename={"HOT"} productname={"Flower Vase"} productprice={"$25.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Productcart id="obs-2" productimg={blackbag} badgename={"HOT"} productname={"Black Backpack"} productprice={"$35.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Productcart id="obs-3" productimg={graybag} badgename={"HOT"} productname={"Gray Backpack"} productprice={"$30.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Productcart id="obs-4" productimg={cup} badgename={"HOT"} productname={"Ceramic Cup"} productprice={"$15.00"} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Productcart id="obs-5" productimg={blackbag} badgename={"HOT"} productname={"Classic Bag"} productprice={"$35.00"} />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>
        </>
    )
}

export default Ourbestseller
