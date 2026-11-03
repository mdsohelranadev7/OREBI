import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import itemsone from '../assets/aboutjuri.png'
import itemswatch from '../assets/aboutwatch.png'

const Aboutcart = () => {
    return (

        <>
            <Container>
                <Flex className={"gap-x-10"}>
                    <div className="h-194 w-193 relative">
                        <Image className={"w-full "} srcimg={itemswatch} srcalt={itemsone.png} />
                        <span className='py-7 px-25 bg-primary text-white absolute bottom-40 left-[50%] -translate-x-1/2 font-bold'>Our Brands</span>
                    </div>

                    <div className="h-194 w-193 relative">
                        <Image className={"w-full "} srcimg={itemsone} srcalt={itemsone.png} />
                        <span className='py-7 px-25 bg-primary text-white absolute bottom-40 left-[50%] -translate-x-1/2 font-bold'>Our Stores</span>
                    </div>
                </Flex>
                <h2 className='text-[39px] font-sans text-primary mb-32' >Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>

                <Flex className={"gap-x-10"}>
                    
                    <div className="">
                        <h4 className='font-bold text-[25px]'>Our Vision</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="">
                        <h4 className='font-bold text-[25px]'>Our Story</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="">
                        <h4 className='font-bold text-[25px]'>Our Brands</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>



                </Flex>




            </Container>
        </>
    )
}

export default Aboutcart