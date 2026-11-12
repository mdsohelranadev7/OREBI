import React from 'react'
import Container from './Container'
import { ChevronRight } from 'lucide-react'
import Aboutcart from './Aboutcart'

const Loging = () => {
    return (
        <>
            <Container>
                <div className="mt-31 mb-34">
                    <h2 className='text-[49px] font-sans font-bold text-primary'>Login</h2>
                    <h4 className='flex text-gry mb-32.5' >Home <ChevronRight />  Loging</h4>



                    <div className="">
                        <p className='pb-15.5 border-b text-gry border-gry'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem <br />  Ipsum has been the industry's standard dummy text ever since the.</p>

                        <h2 className='py-12 text-[39px] font-bold text-primary'>Returning Customer</h2>

                        <form action="" className=' w-[40%] flex flex-col gap-y-5
                        '>

                            <div className="flex flex-col gap-y-2.5">
                                <label htmlFor="">Email</label>
                                <input className='border-b outline-none p-1' type="text" placeholder='Enter your email' />
                            </div>
                            <div className="flex flex-col gap-y-2.5">
                                <label htmlFor="">Password</label>
                                <input className='border-b outline-none p-1' type="text" placeholder='Enter your password' />
                            </div>



                            <button className=' py-2 bg-blue-700 text-white rounded-4xl cursor-pointer'>Login</button>


                        </form>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Loging