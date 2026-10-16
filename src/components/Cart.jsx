import React from 'react'
import Image from './Image'
import item from '../assets/items.png'
import Container from './Container'

const Cart = ({ className, itemimg }) => {
    return (

        <div className="m-5">
            <Container>
                <h2 className="font-bold text-[39px] mb-12">New Arrivals</h2>

                <div className="">
                    <div className="w-92.5 h-92.5 relative group">
                        <Image srcimg={itemimg} srcalt={className} />
                        <span className='px-7.5 py-2.25 absolute top-5 left-5 bg-primary text-white opacity-0 group-hover:opacity-100 
                        duration-400  transition-opacity '>New</span>

                        <div className=" mt-6 flex justify-between items-center">
                            <h3 className='text-[20px] font-bold  text-primary'>{className}</h3>
                            <span className='text-gry text-[16px]'>$44.00</span>
                        </div>
                        <span className='mt-3.8 text-gry'>Black</span>

                    </div>
                </div>

            </Container>
        </div>


    )
}

export default Cart