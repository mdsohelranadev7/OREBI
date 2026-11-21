import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Productcart from './Productcart'

const Newarrival = () => {
    const swiperRef = useRef(null)
    const [pdt, setPdt] = useState([])

    useEffect(() => {
        let isMounted = true
        async function getpdt() {
            try {
                const data = await axios.get('https://dummyjson.com/products?limit=12')
                if (isMounted && data.data && data.data.products) {
                    setPdt(data.data.products)
                }
            } catch (err) {
                console.log('Error fetching new arrivals', err)
            }
        }
        getpdt()
        return () => { isMounted = false }
    }, [])

    return (
        <section className="my-10 md:my-20">
            <Container>
                <div className="flex items-center justify-between mb-6 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-primary">
                        New Arrivals
                    </h2>

                    {/* Arrow Navigation Controls */}
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

                <div className="relative">
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
                        {pdt.length > 0 ? (
                            pdt.map((item) => (
                                <SwiperSlide key={item.id} className="pb-4">
                                    <Productcart
                                        id={`na-${item.id}`}
                                        productimg={item.thumbnail}
                                        productname={item.title}
                                        productprice={`$${item.price.toFixed(2)}`}
                                        badgename={item.discountPercentage ? `${Math.round(item.discountPercentage)}% OFF` : 'NEW'}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="py-12 text-center text-gry">Loading arrivals...</div>
                        )}
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Newarrival
