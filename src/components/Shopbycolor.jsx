import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Container from './Container'

const Shopbycolor = () => {
    return (
        <Container>
            <h3 className='mt-13.25 text-[20px] font-sans font-bold'>Shop by Color</h3>

            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <h5>Black</h5>
                </div>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <h5>Red</h5>
                </div>

                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <h5>Green</h5>
                </div>

                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <h5>Blue</h5>
                </div>

                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <h5>Yellow</h5>
                </div>

                <FaPlus />
            </div>

        </Container>
    )
}

export default Shopbycolor