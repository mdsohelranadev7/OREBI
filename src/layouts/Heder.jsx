import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import Bars from '../components/Bars'
import { Search, User } from 'lucide-react'
import Dorpdown from '../components/Dorpdown'
import Carticon from '../components/Carticon'
import Banners from '../components/Banners'
import Home from '../pages/Home'
import Usermanu from '../components/Usermanu'
import Cartmanu from '../components/Cartmanu'
// import { FaUser } from "react-icons/fa";    

const Heder = () => {

    const [bars, setBars] = useState(false)
    const manuref = useRef(null)



    function handleShow() {

        setBars(!bars)
    }

    useEffect(() => {
        function handleOut(s) {
            if (manuref.current && !manuref.current.contains(s.target)) {
                setBars(false)
            }
        }
        document.addEventListener("mousedown", handleOut)
        return () => document.removeEventListener("mousedown", handleOut)

    }, [])

    return (
        <>
            <div className="sticky w-full top-0 z-50 bg-white">

                <div className=" border-b border-[#979797] ">
                    <Container className={"my-8"} >
                        <Flex className={"items-center"}>
                            <div className="w-[40%]">
                                <Link to={"/"}><Image srcimg={logo} srcalt={logo} /></Link>
                            </div>
                            <div className="w-[60%]">
                                <ul className={"flex gap-x-10 text-gry"}>
                                    <li><Link to={"/"} className={"hover:font-bold hover:text-primary"}>Home</Link></li>
                                    <li><Link to={"/shop"} className={"hover:font-bold hover:text-primary"}>Shop</Link></li>
                                    <li><Link to={"/about"} className={"hover:font-bold hover:text-primary"}>About</Link></li>
                                    <li><Link to={"/contact"} className={"hover:font-bold hover:text-primary"}>Contact</Link></li>
                                    <li><Link to={"/dashboard"} className={"hover:font-bold hover:text-primary"}>Dashboard</Link></li>
                                </ul>
                            </div>
                        </Flex>
                    </Container>
                </div>
                <div className="py-7">
                    <Container>
                        <Flex className={"justify-between"}>
                            <div ref={manuref} className="flex items-center gap-x-2.5 relative" onClick={handleShow}>
                                <Link to={"/"}>
                                    <Bars />
                                </Link>
                                Shop by Catagory
                                {bars &&
                                    <div className="absolute top-6 left-0 z-10 bg-primary text-white w-50 ">
                                        <ul className='flex flex-col tex-[14px] font-sans '>
                                            <Link to={"/"}>
                                                <li className='border-b w-full pl-5 border-[#2d2d2d] py-4 hover:bg-black'>Accesories</li>

                                            </Link>
                                            <Link to={"/"}>
                                                <li className='border-b w-full pl-5 border-[#2d2d2d] py-4  hover:bg-black'>Furniture</li>

                                            </Link>
                                            <Link to={"/"}>
                                                <li className='border-b w-full pl-5 border-[#2d2d2d] py-4 hover:bg-black'>Electronics</li>

                                            </Link>
                                            <Link to={"/"}>
                                                <li className='border-b w-full pl-5 border-[#2d2d2d] py-4 hover:bg-black'>Clothes</li>

                                            </Link>
                                            <Link to={"/"}>

                                                <li className='border-b w-full pl-5 border-[#2d2d2d] py-4 hover:bg-black'>Bags</li>
                                            </Link>
                                            <Link to={"/"}>

                                                <li className='border-b w-full pl-5 border-[#2d2d2d] py-4 hover:bg-black'>Home appliances</li>
                                            </Link>
                                        </ul>

                                    </div>
                                }
                            </div>

                            <div className="relative">
                                <input className={"border w-150.25 px-5 py-4 outline-none focus:border-red-500 focus:shadow-[0_0_10px_3px_rgba(239,68,68,0.2)] "} type="text" placeholder='Search Products' />
                                <Search className={"absolute top-1/2 right-5 -translate-y-1/2"} />

                            </div>

                            <div className="flex items-center gap-x-10">
                                <Usermanu />
                                <Cartmanu />
                            </div>
                        </Flex>
                    </Container>
                </div>

            </div>

        </>

    )
}

export default Heder