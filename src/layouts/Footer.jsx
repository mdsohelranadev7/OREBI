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
                <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/journal'}>Journal</Link>
              </div>
            </div>
            <div className="">
              <h3 className='mb-4 font-bold font-sans text-primary mt-13.75 '>Shop</h3>
              <div className="flex flex-col gap-y-1.5 text-[14px] font-sans text-[#6d6d6d]">
                <Link to={'/'}>Category 1</Link>
                <Link to={'/shop'}>Category 2</Link>
                <Link to={'/about'}>Category 3</Link>
                <Link to={'/contact'}>Category 4</Link>
                <Link to={'/journal'}>Category 5</Link>
              </div>
            </div>
            <div className="">
              <h3 className='mb-4 font-bold font-sans text-primary mt-13.75 '>Help</h3>
              <div className="flex flex-col gap-y-1.5 text-[14px] font-sans text-[#6d6d6d]">
                <Link to={'/'}>Privacy Policy</Link>
                <Link to={'/shop'}>Terms & Conditions</Link>
                <Link to={'/about'}>Special E-shop</Link>
                <Link to={'/contact'}>Shipping</Link>
                <Link to={'/journal'}>Secure Payments</Link>
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
              <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Image className={"w-30"} srcimg={logo} />
              </Link>

            </div>
          </div>



        </div>

        <div className="flex justify-between mt-16">
          <div className="w-65 flex text-primary gap-x-6">


            <a href="https://www.facebook.com/sohelrana.dev7/" target='_blank'>
              <FaFacebookF />

            </a>
            <FaLinkedinIn />

            <a href="https://www.instagram.com/mdsohelrana.dev7/" target='_blank'>
              <FaInstagram />
            </a>


          </div>
          <div className="text-[#6d6d6d]">
            2026 Orebi Minimal eCommerce Figma Template by Adveits
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Footer