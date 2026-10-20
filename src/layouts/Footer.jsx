import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Image from '../components/Image'
import logo from '../assets/Logo.png'
// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Search } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5] pb-15">
      <Container>
        <div className="flex justify-between">
          <div className="w-[40%] flex justify-between">
            <div className="">
              <h3 className='mb-4 font-bold font-sans text-primary mt-13.75 '>MENU</h3>
              <div className="flex flex-col gap-y-1.5 text-[14px] font-sans text-[#6d6d6d]">
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/journal'}>Journal</Link>
              </div>
            </div>
            <div className="">
              <h3 className='mb-4 font-bold font-sans text-primary mt-13.75 '>MENU</h3>
              <div className="flex flex-col gap-y-1.5 text-[14px] font-sans text-[#6d6d6d]">
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/journal'}>Journal</Link>
              </div>
            </div>
            <div className="">
              <h3 className='mb-4 font-bold font-sans text-primary mt-13.75 '>MENU</h3>
              <div className="flex flex-col gap-y-1.5 text-[14px] font-sans text-[#6d6d6d]">
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/journal'}>Journal</Link>
              </div>
            </div>


          </div>




          <div className="w-[60%] flex justify-center gap-x-40  mt-13.75">
            <div className="flex flex-col">
              <Link to={""} className='font-bold text-primary font-sans'>
                (052) 611-5711
              </Link>
              <Link to={""} className='font-bold text-primary font-sans'>
                company@domain.com
              </Link>

              <span className='mt-4'>575 Crescent Ave. Quakertown, PA 18951</span>

            </div>
            <div className="">
              <Image className={"w-30"} srcimg={logo} />

            </div>
          </div>



        </div>

        <div className="flex justify-between mt-16">
          <div className="w-65 flex text-primary gap-x-6">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />

          </div>
          <div className="text-[#6d6d6d]">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Footer