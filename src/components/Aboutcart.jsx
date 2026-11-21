import React from 'react'
import Image from './Image'
import itemsone from '../assets/aboutjuri.png'
import itemswatch from '../assets/aboutwatch.png'

const Aboutcart = () => {
    return (
        <div className="font-sans">
            {/* 2 Featured Brand / Store Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12 lg:mb-20">
                <div className="relative rounded overflow-hidden group">
                    <Image
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                        srcimg={itemswatch}
                        srcalt="Our Brands"
                    />
                    <span className="py-3 px-8 sm:px-12 bg-primary text-white text-xs sm:text-sm absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 font-bold uppercase tracking-wider rounded shadow-md pointer-events-none">
                        Our Brands
                    </span>
                </div>

                <div className="relative rounded overflow-hidden group">
                    <Image
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                        srcimg={itemsone}
                        srcalt="Our Stores"
                    />
                    <span className="py-3 px-8 sm:px-12 bg-primary text-white text-xs sm:text-sm absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 font-bold uppercase tracking-wider rounded shadow-md pointer-events-none">
                        Our Stores
                    </span>
                </div>
            </div>

            {/* Mission / Brand Statement */}
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-sans text-primary mb-12 lg:mb-20 leading-relaxed font-medium">
                Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
            </h2>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-xl sm:text-[22px] text-primary mb-3">Our Vision</h3>
                    <p className="text-sm text-gry leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-xl sm:text-[22px] text-primary mb-3">Our Story</h3>
                    <p className="text-sm text-gry leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-xl sm:text-[22px] text-primary mb-3">Our Brands</h3>
                    <p className="text-sm text-gry leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutcart
