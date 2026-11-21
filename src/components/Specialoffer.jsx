import React, { useRef } from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Productcart from './Productcart';
import cap from '../assets/cap.png'
import table from '../assets/tabble.png'
import sunglass from '../assets/sunglass.png'
import headphone from '../assets/headphone.png'

const Specialoffer = () => {
    const swiperRef = useRef(null)

    return (
        <section className="my-10 md:my-20">
            <Container>
                <div className="flex items-center justify-between mb-6 md:mb-10">
                    <h3 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-primary">
                        Special Offers
                    </h3>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        480: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 25 },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide className="pb-4">
                        <Productcart id="so-1" productimg={cap} badgename={"HOT"} productname={"Casual Cap"} productprice={"$20.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="so-2" productimg={table} badgename={"HOT"} productname={"Study Table"} productprice={"$120.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="so-3" productimg={sunglass} badgename={"HOT"} productname={"Sun Glasses"} productprice={"$45.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="so-4" productimg={headphone} badgename={"HOT"} productname={"Wireless Headphones"} productprice={"$75.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="so-5" productimg={table} badgename={"HOT"} productname={"Wooden Table"} productprice={"$130.00"} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default Specialoffer
