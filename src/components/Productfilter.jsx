import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaPlus } from 'react-icons/fa'
import Shopbycatagory from './Shopbycatagory'
import Shopbycolor from './Shopbycolor'
import Shopbybrand from './Shopbybrand'
import Shopbyprice from './Shopbyprice'
import { Grid2x2 } from 'lucide-react'
import { AiOutlineBars } from 'react-icons/ai'
import Image from './Image'
import windowbar from '../assets/windowbar.png'
import bartwo from '../assets/bar2.png'
import Productcart from './Productcart'
import cup from '../assets/cup.png'

const Productfilter = () => {
    return (
        <Container>

            <div className="flex justify-between">
                <div className="w-[20%] group">
                    <Shopbycatagory />
                    <Shopbycolor />
                    <Shopbybrand />
                    <Shopbyprice />

                </div>

                <div className="w-[80%] mb-10 ml-10">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Image srcimg={windowbar} className={"mr-5"} />
                            <Image srcimg={bartwo} />

                        </div>

                        <div className=" flex justify-center gap-x-10">

                            <div className=" flex text-gry  items-center gap-x-3.5">
                                <h4>Sort by:</h4>
                                <select name="" id="" className='py-1 px-5  border'>
                                    <option value="featured">Featured</option>
                                    <option value="low">Price: Low to High</option>
                                    <option value="high">Price: High to Low</option>
                                    <option value="name">Name: A-Z</option>
                                </select>
                            </div>

                            <div className=" flex text-gry  items-center gap-x-3.5">
                                <h4>Show:</h4>
                                <select name="" id="" className='py-1 px-5  border w-40'>
                                    <option value="featured">36</option>
                                    <option value="low">34</option>
                                    <option value="high">32</option>
                                    <option value="name">30</option>
                                </select>
                            </div>

                        </div>
                    </div>


                    <div className="grid grid-cols-3 gap-x-10">

                        <Productcart productimg={cup} productname={"New Cup"} productprice={"$45.00"} />


                    </div>


                </div>

            </div>


        </Container>
    )
}

export default Productfilter