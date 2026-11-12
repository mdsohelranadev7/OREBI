import React from 'react';
import { Link } from 'react-router-dom';
import srcimg from '../assets/banner.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banners = () => {
    return (
        <section className="w-full bg-[#f5f7f9] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-[160px] sm:h-[260px] md:h-[340px] lg:h-[440px] xl:h-[520px] 2xl:h-[597px]"
                >
                    <SwiperSlide className="w-full h-full flex items-center justify-center">
                        <Link to="/shop" className="block w-full h-full">
                            <img
                                src={srcimg}
                                alt="Final Offer - Up to 50% sale"
                                className="w-full h-full object-cover object-center block"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full flex items-center justify-center">
                        <Link to="/shop" className="block w-full h-full">
                            <img
                                src={srcimg}
                                alt="Final Offer - Up to 50% sale"
                                className="w-full h-full object-cover object-center block"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full flex items-center justify-center">
                        <Link to="/shop" className="block w-full h-full">
                            <img
                                src={srcimg}
                                alt="Final Offer - Up to 50% sale"
                                className="w-full h-full object-cover object-center block"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full flex items-center justify-center">
                        <Link to="/shop" className="block w-full h-full">
                            <img
                                src={srcimg}
                                alt="Final Offer - Up to 50% sale"
                                className="w-full h-full object-cover object-center block"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full flex items-center justify-center">
                        <Link to="/shop" className="block w-full h-full">
                            <img
                                src={srcimg}
                                alt="Final Offer - Up to 50% sale"
                                className="w-full h-full object-cover object-center block"
                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banners;
