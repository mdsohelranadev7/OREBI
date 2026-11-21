import React, { useRef } from 'react'
import Productcart from './Productcart'
import Container from './Container'
import juri from '../assets/juri.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import graybag from '../assets/grey bag.png'
import cup from '../assets/cup.png'
import blackbag from '../assets/balck bag.png'

const Ourbestseller = () => {
    const swiperRef = useRef(null)

    return (
        <section className="my-10 md:my-20">
            <Container>
                <div className="flex items-center justify-between mb-6 md:mb-10">
                    <h3 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-primary">
                        Our Bestsellers
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
                        <Productcart id="obs-1" productimg={juri} badgename={"HOT"} productname={"Flower Vase"} productprice={"$25.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="obs-2" productimg={blackbag} badgename={"HOT"} productname={"Black Backpack"} productprice={"$35.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="obs-3" productimg={graybag} badgename={"HOT"} productname={"Gray Backpack"} productprice={"$30.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="obs-4" productimg={cup} badgename={"HOT"} productname={"Ceramic Cup"} productprice={"$15.00"} />
                    </SwiperSlide>
                    <SwiperSlide className="pb-4">
                        <Productcart id="obs-5" productimg={blackbag} badgename={"HOT"} productname={"Classic Bag"} productprice={"$35.00"} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default Ourbestseller
