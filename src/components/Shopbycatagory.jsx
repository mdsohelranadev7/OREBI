import React from 'react'
import Container from './Container'
import { FaPlus } from 'react-icons/fa'

const Shopbycatagory = () => {
    return (
        <Container>
            <h3 className=' text-[20px] font-sans font-bold'>Shop by Category</h3>

            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Category 1</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Category 2</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Category 3</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Category 4</h5>
                <FaPlus />
            </div>
            <div className="flex justify-between mt-9 pb-5 border-b border-[#f0f0f0] text-gry">
                <h5>Category 5</h5>
                <FaPlus />
            </div>

        </Container> 
  )
}

export default Shopbycatagory