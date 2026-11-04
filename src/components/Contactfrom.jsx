import React from 'react'
import Image from './Image'
import map from '../assets/Map.png'

const Contactfrom = () => {
    return (
        <>
            <form action="" className='font-sans'>
                <h2 className='text-[40px] mb-11 text-primary font-bold'>Fill up a Form</h2>
                <div className="w-195">
                    <div className="flex flex-col border-b mb-6 ">
                        <label className='text-[16px] font-bold' htmlFor="">Name</label>
                        <input required className='py-2.5  text-gry outline-none' type="text" placeholder='Your name here' />
                    </div>
                    <div className="flex flex-col border-b mb-6 ">
                        <label className='text-[16px] font-bold' htmlFor="">Email</label>
                        <input required className='py-2.5  text-gry outline-none' type="text" placeholder='Your email here' />
                    </div>
                    <div className="flex flex-col border-b mb-6 h-35">
                        <label className='text-[16px] font-bold' htmlFor="">Message</label>
                        <input className='py-2.5  text-gry outline-none' type="text" placeholder='Your message here' />
                    </div>
                </div>

                <button className='px-21.25 py-4 bg-primary text-white hover:bg-gry cursor-pointer mt-6'>Post</button>

                <Image srcimg={map} className={"py-35"} />



            </form>
        </>
    )
}

export default Contactfrom