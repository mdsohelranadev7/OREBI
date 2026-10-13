import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import Bars from '../components/Bars'
import { Search, User } from 'lucide-react'
import Dorpdown from '../components/Dorpdown'
import Cart from '../components/Cart'
// import { FaUser } from "react-icons/fa";    

const Heder = () => {
    return (
        <>
            <div className=" border-b border-[#979797]">
                <Container className={"my-8"} >
                    <Flex className={"items-center"}>
                        <div className="w-[40%]">
                            <Link><Image srcimg={logo} srcalt={logo} /></Link>
                        </div>
                        <div className="w-[60%]">
                            <ul className={"flex gap-x-10 text-[#767676]"}>
                                <li><Link to={"/"} className={"hover:font-bold hover:text-[#262626]"}>Home</Link></li>
                                <li><Link to={"/shop"} className={"hover:font-bold hover:text-[#262626]"}>Shop</Link></li>
                                <li><Link to={"/about"} className={"hover:font-bold hover:text-[#262626]"}>About</Link></li>
                                <li><Link to={"/contact"} className={"hover:font-bold hover:text-[#262626]"}>Contact</Link></li>
                            </ul>
                        </div>
                    </Flex>
                </Container>
            </div>
            <div className="py-7">
                <Container>
                    <Flex className={"justify-between"}>
                        <div className="flex items-center gap-x-2.5">
                            <Bars />
                            Shop by Catagory
                        </div>

                        <div className="relative">
                            <input className={"border w-150.25 px-5 py-4 outline-none focus:border-red-500 focus:shadow-[0_0_10px_3px_rgba(239,68,68,0.2)] "} type="search" placeholder='Search Products' />
                            <Search className={"absolute top-1/2 right-5 -translate-y-1/2"} />

                        </div>
                        <div className="flex items-center gap-x-10">
                            <div className="flex items-center gap-x-2.5 ">
                                <User />
                                <Dorpdown />
                            </div>
                            <Cart />

                        </div>
                    </Flex>
                </Container>


            </div>
        </>

    )
}

export default Heder