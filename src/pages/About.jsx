import React, { useState } from 'react'
import Container from '../components/Container'
import { ChevronRight } from 'lucide-react'
import Aboutcart from '../components/Aboutcart'


const About = () => {





  return (
    <>

      <Container>

        <div className="mt-31 mb-34">
          <h2 className='text-[49px] font-sans font-bold text-primary'>About</h2>
          <h4 className='flex text-gry mb-32.5' >Home <ChevronRight />  About</h4>

          <Aboutcart /> 
        </div>
      </Container>

    </>
  )
}

export default About