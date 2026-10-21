import React from 'react'
import Container from './Container'
import { FaPlus } from 'react-icons/fa'

const Shopbybrand = () => {
  return (
   <Container>
            <h3 className='mt-12.25 text-[20px] font-sans font-bold'>Shop by Brand</h3>

            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Brand 1</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Brand 2</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Brand 3</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Brand 4</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Brand 5</h5>
                <FaPlus />
            </div>

        </Container> 
  )
}

export default Shopbybrand