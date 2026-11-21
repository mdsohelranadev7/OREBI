import React from 'react'
import Container from './Container'
import Image from './Image'
import Ad1 from '../assets/Ad_1.jpg'
import Ad2 from '../assets/Ad_2.png'
import Ad3 from '../assets/Ad_3.jpg'
import { Link } from 'react-router-dom'

const Promotion = () => {
    return (
        <section className="my-10 md:my-20">
            <Container>
                <div className="flex flex-col md:flex-row items-stretch gap-6 lg:gap-10">
                    {/* Left Column Promotion */}
                    <div className="w-full md:w-1/2 overflow-hidden group">
                        <Link to="/shop" className="block w-full h-full">
                            <Image
                                srcimg={Ad1}
                                srcalt="Phones Sale Promotion"
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 rounded"
                            />
                        </Link>
                    </div>

                    {/* Right Column (2 Stacked Ads) */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6 lg:gap-10">
                        <div className="overflow-hidden group">
                            <Link to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Image
                                    srcimg={Ad2}
                                    srcalt="Electronics Sale"
                                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 rounded"
                                />
                            </Link>
                        </div>

                        <div className="overflow-hidden group">
                            <Link to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Image
                                    srcimg={Ad3}
                                    srcalt="Furniture Discount"
                                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 rounded"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Promotion
