import React from 'react'
import Container from './Container'
import { FaPlus } from 'react-icons/fa'

const Shopbyprice = () => {
    return (
        <Container>
            <h3 className='mt-13.25 text-[20px] font-sans font-bold'>Shop by Price</h3>

            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>$0.00 - $9.99</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>$10.00 - $19.99</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>$20.00 - $29.99</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>$30.00 - $39.99</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>$40.00 - $69.99</h5>
                <FaPlus />
            </div>

        </Container>
    )
}

export default Shopbyprice