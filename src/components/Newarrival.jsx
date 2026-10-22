import React, { useRef } from 'react'
import Productcart from './Productcart'
import Container from './Container'
import itemsone from '../assets/items1.png'
import itemstwo from '../assets/items2.png'
import itemsthree from '../assets/items3.png'
import itemsfour from '../assets/items4.png'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Newarrival = () => {
    const swiperRef = useRef(null)

    return (
        <Container>

            <h2 className={"text-[39px] font-bold text-primary mb-12"}>New Arrivals</h2>
            <div className="relative">

                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-2 top-[50%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-300 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>


                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-2 top-[50%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-300 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                    <ChevronRight size={20} />
                </button>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >

                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.top({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemsone} badgename={"New"} productname={"New Watch"} productprice={"$44.00"} />
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.top({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemstwo} badgename={"TOP"} productname={"New Neck Tee"} productprice={"$58.00"} />
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.top({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemsthree} badgename={"HOT"} productname={"New Bag"} productprice={"$12.00"} />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemsfour} badgename={"New"} productname={"New Rabbit"} productprice={"$44.00"} />
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemsone} badgename={"TOP"} productname={"New Watch"} productprice={"$94.00"} />
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemstwo} badgename={"TOP"} productname={"New Watch"} productprice={"$44.00"} />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Productcart productimg={itemsfour} badgename={"TOP"} productname={"New Rabbit"} productprice={"$84.00"} />
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </Container >
    )
}

export default Newarrival