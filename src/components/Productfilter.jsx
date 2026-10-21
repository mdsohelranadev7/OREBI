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

const Productfilter = () => {
    return (
        <Container>

            <div className="flex">
                <div className="w-[20%] group">
                    <Shopbycatagory />
                    <Shopbycolor />
                    <Shopbybrand />
                    <Shopbyprice />

                </div>

                <div className="w-[80%] mb-10">

                    <div className="flex items-center">


                        <div className="flex items-center">
                            <Image srcimg={windowbar} className={"mr-5"} />
                            <Image srcimg={bartwo} />

                        </div>




                    </div>


                </div>

            </div>


        </Container>
    )
}

export default Productfilter